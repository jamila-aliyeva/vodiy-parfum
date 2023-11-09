import crud from "./crud";
import LastProductsType from "@/types/last-products";

const useLastProduct = crud<LastProductsType>("last-products");

export default useLastProduct;
