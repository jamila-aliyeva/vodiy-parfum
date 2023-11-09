"use client";

import AllProductsCard from "@/components/cards/all-products";
import useAllCategories from "@/store/all-category";
import { useEffect } from "react";

const AllProductsList = () => {
  const { loading, data, getData } = useAllCategories();
  console.log(data);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      {/* {category.map((el) => (
        <AllProductsCard key={el._id} {...el} />
      ))} */}
    </div>
  );
};

export default AllProductsList;
