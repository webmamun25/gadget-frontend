

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import { FaRegStar } from "react-icons/fa6";
import { Electronics } from "@/types";
const ProductDetails= ({products}:{products:Electronics}) =>{


    
  return (
   
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {products.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         {products.description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={products.image}
            height={500}
            width={500}
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-[12px] font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-[12px] font-bold dark:text-white"
          >
            <FaRegStar className="inline-block text-yellow-400 font-semibold text-2xl"></FaRegStar>{products.ratings} 
          </CardItem>
         
        
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
           
          >
             <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
           ${products.price}
</button>
           
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
           
          >
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            {products.brand}
</button>
           
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export default ProductDetails