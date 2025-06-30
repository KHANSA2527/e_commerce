"use client"
import { usePreviewSlider } from '@/app/context/PreviewSliderContext';
import { FullScreenIcon } from '@/assets/icons';
import { updateproductDetails } from '@/redux/features/product-details';
import { AppDispatch, useAppSelector } from '@/redux/store';
import Image from 'next/image';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const ProductDetails =  ({productDetails} : any) => {
  

    const dispatch = useDispatch<AppDispatch>();
        const { openPreviewModal } = usePreviewSlider();
    
          const product = useAppSelector((state) => state.quickViewReducer.value);

           const defaultVariantIndex = productDetails.productVariants.findIndex(
             (v:any) => v.isDefault
           );
        
           const [activeImage, setActiveImage] = useState(
             productDetails.productVariants[defaultVariantIndex]?.image ||
               productDetails.productVariants[0]?.image ||
               ""
           );
      console.log("productproduct=++++", product);
        const handlePreviewSlider = () => {
          dispatch(
            updateproductDetails({
              ...productDetails,
            })
          );
          openPreviewModal();
        };
  return (
    <>
      <div className="relative pt-5 pb-20 overflow-hidden lg:pt-20 xl:pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-7xl">
        {/* LEFT: Image + Thumbnails */}
        <div className="relative">
          <div className="relative z-1 overflow-hidden flex items-center justify-center w-full bg-gray-1 rounded-lg border border-gray-3 h-[400px]">
            <Image
              src={activeImage}
              alt={productDetails.title}
              width={400}
              height={400}
              className="object-contain max-h-full"
            />

            <button
              onClick={handlePreviewSlider}
              className="absolute z-50 flex items-center justify-center w-10 h-10 duration-200 ease-out bg-white rounded-lg shadow-1 text-dark hover:text-blue top-4 right-4"
            >
              <span className="sr-only">Fullscreen</span>
              <FullScreenIcon />
            </button>
          </div>

          {/* Variant Thumbnails */}
          <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
            {productDetails.productVariants.map((variant: any, index: any) => (
              <button
                key={index}
                onClick={() => setActiveImage(variant.image)}
                className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-blue border-blue ${
                  activeImage === variant.image ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <Image
                  src={variant.image}
                  alt={variant.color}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold sm:text-2xl xl:text-custom-3 text-dark">
            {productDetails.title}
          </h2>
          <p className="text-gray-600">{productDetails.shortDescription}</p>

          <div className=" text-xl sm:text-2xl mb-4.5">
            <span className="mr-2 font-semibold text-dark">Price:</span>
            <span className="font-medium line-through">
              ${productDetails.price}
            </span>
            <span className="font-semibold text-dark mx-2">
              ${productDetails.discountedPrice}
            </span>
          </div>
          <div className="flex flex-col gap-4.5 border-y border-gray-3 mt-7.5 mb-9 py-9">
            <div className="flex items-center gap-4">
              <div className="min-w-[65px]">
                <h4 className="text-base font-normal capitalize text-dark">
                  Color:
                </h4>
              </div>
              <ul className="flex items-center gap-2.5">
                <li
                  className="w-[22px] cursor-pointer h-[22px] bg-gray-7 rounded-full inline-flex items-center justify-center border-transparent"
                  // style={"background-color: gray;"}
                >
                  <svg
                    className="block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M10.0517 3.27002L4.59172 8.73002L1.94922 6.08755"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </li>
                <li
                  className="w-[22px] cursor-pointer h-[22px] bg-[#FFC0CB] rounded-full inline-flex items-center justify-center border-transparent"
                >
                  <svg
                    className="hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M10.0517 3.27002L4.59172 8.73002L1.94922 6.08755"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="min-w-[65px]">
                <h4 className="font-normal capitalize text-dark">storage:</h4>
              </div>
              <div className="flex items-center gap-4">
                <span className="border py-1 px-2.5 rounded-md text-sm font-normal cursor-pointer border-blue text-blue">
                  128 GB
                </span>
                <span className="border py-1 px-2.5 rounded-md text-sm font-normal cursor-pointer border-gray-3 text-dark-3">
                  64 GB
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="min-w-[65px]">
                <h4 className="font-normal capitalize text-dark">Sim:</h4>
              </div>
              <div className="flex items-center gap-4">
                <span className="border py-1 px-2.5 rounded-md text-sm font-normal cursor-pointer border-blue text-blue">
                  Dual
                </span>
                <span className="border py-1 px-2.5 rounded-md text-sm font-normal cursor-pointer border-gray-3 text-dark-3">
                  E Sim
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductDetails