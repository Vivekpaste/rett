import React from "react";
import Image from "next/image";
import JoinUsForm from "@/components/Partials/joinUsForm";
import LayoutHeader from "@/components/Partials/header";
import LayoutFooter from "@/components/Partials/footer";

export default function joinUs() {
  return (
    <main className="min-h-screen ">
      {/* top navbar */}
      {/* <LayoutHeader /> */}
      <section className="bg-white w-full mt-36 md:mt-0 lg:mt-0 rounded-b-[5rem] ">
        <div className="container flex flex-col-reverse justify-between mx-auto bg-white min-h-96 md:flex-row lg:flex-row ">
          <div className="content-center w-full md:min-h-32 lg:min-h-32 md:w-1/2 lg:w-1/2 ">
            <h3 className="ml-10 text-4xl font-semibold text-yellowGreen md:text-6xl lg:text-6xl">
              Join Us
            </h3>
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/2 md:absolute md:right-0 lg:absolute lg:right-0">
            <Image
              src="/images/joinusbanner.png"
              alt="join us"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-ghostWhite">
        <div className="container flex-row p-10 mx-auto mt-10 ">
          <h2 className="text-3xl font-semibold text-[#173462] tracking-wider ">
            Stay up to date with the latest information about Rett syndrome from
            Acadia
          </h2>
          <p className="mt-5 text-[#3C3C3C]">
            Thank you for your interest! We’ll let you know when new information
            and Rett Syndrome resources become available. Please provide the
            following information:
          </p>
        </div>
        <div className="container flex items-center content-center justify-center p-10 mx-auto">
          <div className="bg-[#AED67A] flex p-10 items-center content-center justify-center rounded-3xl">
            <JoinUsForm />
          </div>
        </div>
      </section>
      <section>
        {/* <LayoutFooter /> */}
      </section>
    </main>
  );
}
