import AllproductsType from "@/types/all-categories";
import Image from "next/image";

import "./style.css";
import Link from "next/link";

const AllProductsCard = ({ image, _id, name }: AllproductsType) => {
  return (
    <div className="">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <Image
          src={image.url}
          alt="img-blur-shadow"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,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"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
          {name}
        </h5>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/categories/${_id}`}>
          <button
            className="select-none rounded-lg bg-sky-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-100/60 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true">
            <h3>{name}</h3>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllProductsCard;
