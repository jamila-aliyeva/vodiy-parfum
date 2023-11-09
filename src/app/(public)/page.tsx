import { Metadata } from "next";
import "./style.css";
import AllProductsList from "../list/AllProducts";
export const metadata: Metadata = {
  title: "Vodiy Parfum | home",
  description: "Lorem ipusum ....",
};

export default function Home() {
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="container">
        <h1 className="product-title">Oxirgi Mahsulotlar</h1>
        {/* <LastProductsList /> */}

        <h2 className=" product-title">Mahsulotlar Kategoriyasi</h2>
        <AllProductsList />
      </div>
    </section>
  );
}
