import AllproductsType from "@/types/all-categories";
import crud from "./crud";

const useAllCategories = crud<AllproductsType>("/category");

export default useAllCategories;
