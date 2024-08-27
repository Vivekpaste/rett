import Image from "next/image";
import React from "react";

export default function HeroSection({ title, banner }) {
  return (
    <section className="bg-white w-full  0 lg:mt-0 rounded-b-[5rem] ">
      <div className="container w-full max-w-[1400px] flex justify-between flex-wrap flex-col-reverse mx-auto bg-white h-fit  md:flex-row lg:flex-row ">
        <div className="content-center w-full md:w-1/2  flex justify-end items-center p-5 md:p-2 lg:p-5 pb-0 ">
          <div className="w-full max-w-[514px] mb-4 md:mb-0">
            <h3 className="flex text-[68px] text-yellowGreen font-figtree-bold font-bold leading-normal customText">
              {title}
            </h3>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 md:relative md:right-0 lg:relative lg:right-0">
          <Image
            src={banner}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
