import Image from 'next/image'
import React from 'react'

const ShowProdcuts = ({search}) => {
  const {title,image,brand,description,price}=search
  return (
    <div>
         <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
        <a href="/" aria-label="Article">
          <Image
            src={image}
            height={1000}
            width={1000}
            className="object-contain w-full h-64 rounded"
            alt=""
          />
        </a>
        <div className="py-5">
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
          {brand}
          </p>
          <a
            href="/"
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-2xl font-bold leading-5">
             {title}
            </p>
          </a>
          <p className="mb-4 text-gray-700">
          {description}
          </p>
          <div className="flex space-x-4">
            <a
              href="/"
              aria-label="Likes"
              className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
            >
              <div className="mr-2">
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
              <p className="font-semibold">${price}</p>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowProdcuts