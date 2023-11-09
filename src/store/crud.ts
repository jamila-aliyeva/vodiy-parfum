import request from "@/server";
import React from "react";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const crud = <T>(url: string) => {
  interface DataState {
    search: string;
    total: number;
    loading: boolean;
    data: T[];
    selected: null | string;
    isModalLoading: boolean;
    isModalOpen: boolean;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    showModal: (form: any) => void;
    editData: (form: any, id: string) => void;
    deleteData: (id: string) => void;
    handleOk: (form: any) => void;
    closeModal: () => void;
    getData: () => void;
  }

  return create<DataState>()(
    devtools(
      persist(
        (set, get) => {
          const setState = (obj: object) => {
            set((state) => ({ ...state, ...obj }));
          };

          console.log(get());

          return {
            search: "",
            total: 0,
            loading: false,
            data: [],
            selected: null,
            isModalLoading: false,
            isModalOpen: false,
            getData: async () => {
              try {
                const { search } = get();
                const params = { search };

                setState({ loading: true });
                const { data } = await request.get<T[]>(url, {
                  params,
                });

                setState({
                  data: data,
                  total: data.length,
                });
              } finally {
                setState({ loading: false });
              }
            },
            handleSearch: (e) => {
              setState({ search: e.target.value });
              get().getData();
            },
            showModal: (form) => {
              set((state) => ({ ...state, isModalOpen: true, selected: null }));
              form.resetFields();
            },
            editData: async (form, id) => {
              try {
                set((state) => ({
                  ...state,
                  selected: id,
                  loading: true,
                  isModalOpen: true,
                }));
                const { data } = await request.get(`${url}/${id}`);
                form.setFieldsValue(data);
              } finally {
                set((state) => ({ ...state, selected: id, loading: false }));
              }
            },
            deleteData: async (id) => {
              try {
                set((state) => ({
                  ...state,
                  loading: true,
                }));
                await request.delete(`${url}/${id}`);
                get().getData();
              } finally {
                set((state) => ({
                  ...state,
                  loading: false,
                }));
              }
            },
            handleOk: async (form) => {
              try {
                const { selected } = get();
                const values = await form.validateFields();

                set((state) => ({
                  ...state,
                  isModalLoading: true,
                }));

                if (selected === null) {
                  await request.post("category", values);
                } else {
                  await request.put(`${url}/${selected}`, values);
                }

                set((state) => ({ ...state, isModalOpen: false }));
                get().getData();
                form.resetFields();
              } finally {
                set((state) => ({ ...state, isModalLoading: false }));
              }
            },
            closeModal: () => {
              set((state) => ({ ...state, isModalOpen: false }));
            },
          };
        },
        { name: "data" }
      )
    )
  );
};

export default crud;
