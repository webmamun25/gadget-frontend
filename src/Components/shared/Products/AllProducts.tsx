import { Electronics } from '@/types';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiOutlineNumber } from "react-icons/ai";
const AllProducts = async ({products}:{products:Electronics[]}) => {
  


  return (
    <div>
      
     
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

          {
            products.map((product, i: number) => (<div key={i} className="overflow-hidden  transition-shadow duration-300 bg-white rounded">
              <a href="/" aria-label="Article">
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  className="object-contain w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="py-5 px-3 rounded bg-slate-50 relative h-[200px]">

                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">
                    {product.title}
                  </p>
                </a>
                <p className="mb-4 text-gray-700 truncate">
                  {product.description}
                </p>

                <Button  as={Link} href={`/electronics/${product._id}`} className=" hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#dfe7ef] px-8 py-2  w-full   font-light transition duration-200 ease-linear">
                  Details Info
                </Button>

                <div className="flex space-x-4 absolute bottom-0">
                  <a
                    href="/"
                    aria-label="Likes"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2 mb-3 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">{product.ratings}</p>
                  </a>
                  <a
                    href="/"
                    aria-label="Comments"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2 text-2xl">
                      <AiOutlineNumber />
                    </div>
                    <p className="font-semibold">{product.brand}</p>
                  </a>
                </div>
              </div>
            </div>))
          }

        </div>
      </div>
    </div>
  )
}

export default AllProducts