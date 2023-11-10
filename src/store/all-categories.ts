import crud from "./crud";
import AllCategoryType from "@/types/all-categories";

const useAllCategories = crud<AllCategoryType>("/category");

export default useAllCategories;
