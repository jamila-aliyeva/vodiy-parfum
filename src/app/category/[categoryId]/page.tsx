import ProductsRow from "@/components/shares/products-row";
import request from "@/server";
import AllCategoryType from "@/types/all-categories";
import MetadataParams from "@/types/dinamic-metadata";
import Params from "@/types/dinamic-params";
import Image from "next/image";
import React from "react";

export async function generateMetadata({
  params: { categoryId },
}: MetadataParams) {
  const { data } = await request.get<AllCategoryType>(`category/${categoryId}`);

  return {
    title: data.name,
    description: data.name,
  };
}

const CategoryPage = async ({ params: { categoryId } }: Params) => {
  const { data } = await request.get<AllCategoryType>(`category/${categoryId}`);
  const {
    data: { total, products },
  } = await request.get<{ total: number; products: AllCategoryType[] }>(
    `product`,
    {
      params: { category: categoryId },
    }
  );
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="relative w-50 mx-auto" style={{ height: "200px" }}>
        <Image src={data.image.url} fill alt={data.name} objectFit="contain" />
      </div>
      <h1 className="text-center  my-6">
        {data.name} ({total})
      </h1>
      <ProductsRow products={products} />
    </div>
  );
};

export default CategoryPage;
