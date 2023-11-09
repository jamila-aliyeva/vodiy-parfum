"use client";

import AllProductsCard from "@/components/cards/all-products";
import useAllCategories from "@/store/all-category";
import { useEffect } from "react";

const AllProductsList = () => {
  const { loading, data: category, getData } = useAllCategories();
  console.log(category);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      {category.map((el) => (
        <AllProductsCard key={el._id} {...el} />
      ))}
    </div>
  );
};

export default AllProductsList;
