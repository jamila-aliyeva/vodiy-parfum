import AllproductsType from "@/types/all-products";
import Image from "next/image";

import "./style.css";
import Link from "next/link";

const AllProductsCard = ({ image, _id, name }: AllproductsType) => {
  return (
    <div className="">
      <article className="card__article relative overflow-hidden">
        <Image
          fill
          src={image}
          alt="image"
          className="card__img w-[328px] rounded-3xl"
        />
        <div className="card__data w-[380px] bg-white py-4 px-4 rounded-3xl absolute shadow-lg">
          <h2 className="card_title ">{name}</h2>
          <Link href="#" className="card__button">
            Read More
          </Link>
        </div>
      </article>
    </div>
  );
};

export default AllProductsCard;
