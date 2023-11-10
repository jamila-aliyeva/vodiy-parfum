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
    <div className="flex flex-wrap">
      {loading ? (
        <div>
          <h2 className="">loading...</h2>
        </div>
      ) : (
        category.map((el) => <AllProductsCard key={el._id} {...el} />)
      )}
    </div>
  );
};

export default AllProductsList;
