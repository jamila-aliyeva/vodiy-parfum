import { Metadata } from "next";
import "./style.css";
export const metadata: Metadata = {
  title: "Vodiy Parfum | home",
  description: "Lorem ipusum ....",
};

export default function Home() {
  return (
    <section style={{ marginTop: "100px" }}>
      <div className="container">
        <h1 className="text-center product-title">Oxirgi Mahsulotlar</h1>
        {/* <LastProductsList /> */}
      </div>
    </section>
  );
}
