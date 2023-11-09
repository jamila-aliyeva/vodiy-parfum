"use client";

import LastProductCard from "@/components/cards/LastProductsCard";
import useLastProduct from "@/store/last-products";
import React, { useEffect } from "react";

const LastProductsList = () => {
  const {
    // search,
    // loading,
    data,
    // selected,
    // total,
    // isModalLoading,
    // isModalOpen,
    // handleSearch,
    // showModal,
    // editData,
    // deleteData,
    // handleOk,
    // closeModal,
    getData,
  } = useLastProduct();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <section>
      <div className="container">
        {/* <div>
          {.map((el) => (
            <LastProductCard key={el._id} {...el} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default LastProductsList;
