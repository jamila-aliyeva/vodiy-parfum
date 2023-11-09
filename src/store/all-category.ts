import AllproductsType from "@/types/all-products";
import crud from "./crud";

const useAllCategories = crud<AllproductsType>("/category");

export default useAllCategories;
