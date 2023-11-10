import AllCategoryType from "@/types/all-categories";
import AllProductsCard from "../cards/all-categoriesCard";

interface ProductsRowProps {
  loading?: boolean;
  products: AllCategoryType[];
}

const ProductsRow = ({ loading, products }: ProductsRowProps) => {
  return (
    <div className="flex flex-wrap">
      {loading ? (
        <div style={{ fontSize: "50px" }}>loading...</div>
      ) : (
        products.map((product) => (
          <AllProductsCard key={product._id} {...product} />
        ))
      )}
    </div>
  );
};

export default ProductsRow;
