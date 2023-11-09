"use client";

import AllProductsCard from "@/components/cards/AllProductsCard";
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
      {/* {data.map((el) => {
        <AllProductsCard key={el._id} {...el} />;
        // console.log(el);
      })} */}
    </div>
  );
};

export default AllProductsList;
