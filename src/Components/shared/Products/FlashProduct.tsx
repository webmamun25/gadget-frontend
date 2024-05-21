// import { flashsale } from "@/types";
import { Electronics } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const FlashProduct = ({flashsale}:{flashsale:Electronics}) => {

  
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src={flashsale.image}
          width={300}
          height={300}
          alt="flashsale image"
          className="rounded-xl h-64"
        />
      </figure>
      <div className="card-body">
        <p className="flex items-center justify-center text-accent bg-cyan-100 w-44 rounded-full py-1">
          <FaCalendar className="mr-2" />
          {flashsale.category}
        </p>
        <h2 className="card-title">
          {flashsale.title}
        </h2>
        <p className="text-gray-500 truncate">
          {flashsale.description}
        
        </p>
        
        <div className="flex justify-between items-center mt-5">
          
            <span>{flashsale.brand}</span>
          </div>

          <div className="flex items-center">
            <AiFillLike className="text-accent text-xl" /> {flashsale.ratings}{" "}
            Likes
          </div>
        </div>
      </div>

  );
};

export default FlashProduct;
