"use client";

import AllProductsCard from "@/components/cards/all-categoriesCard";
import useAllCategories from "@/store/all-categories";
import { useEffect } from "react";

const AllProductsList = () => {
  const { loading, data: category, getData } = useAllCategories();
  console.log(category);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {category.map((el) => (
        <AllProductsCard key={el._id} {...el} />
      ))}
    </div>
  );
};

export default AllProductsList;
