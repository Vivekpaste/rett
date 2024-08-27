import React from "react";
import Image from "next/image";
import JoinUsForm from "@/components/Partials/joinUsForm";
import LayoutHeader from "@/components/Partials/header";
import LayoutFooter from "@/components/Partials/footer";
import Link from "next/link";

export default function sitemap() {
  return (
    <main className="min-h-screen ">
      {/* top navbar */}
      {/* <LayoutHeader /> */}
      <section className="bg-[#173462] w-full">
        <div className="container relative flex flex-col-reverse md:flex-row lg:flex-row justify-between  mx-auto bg-[#173462] ">
          <div className="content-center w-full min-h-32 md:w-1/2 lg:w-1/2 ">
            <h3 className="ml-10 text-3xl font-semibold text-white md:text-5xl lg:text-5xl">
              Sitemap
            </h3>
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/2 ">
            <Image
              src="/images/sitemapBanner.png"
              alt="sitemap"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container flex-row p-10 mx-auto mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex-row space-y-5 links">
              <Link
                href="#"
                className="flex font-bold  text-2xl text-[#173462]"
              >
                Home
              </Link>
              <Link
                href="#"
                className="flex font-bold  text-2xl text-[#173462]"
              >
                About Rett Syndrome
              </Link>
              <Link href="#" className="flex text-sm font-thin underline">
                Understanding This Condition
              </Link>
              <Link href="#" className="flex text-sm font-thin underline">
                Impact on Individuals & Families
              </Link>
              <Link
                href="#"
                className="flex font-bold  text-2xl text-[#173462]"
              >
                Diagnosis and Genetic Testing
              </Link>
            </div>

            {/*  */}
            <div className="flex-row space-y-5 links">
              <Link
                href="#"
                className="flex font-bold  text-2xl text-[#173462]"
              >
                Treatment
              </Link>
              <Link href="#" className="flex text-sm font-thin underline">
                Multidisciplinary Treatment Approach
              </Link>
              <Link href="#" className="flex text-sm font-thin underline">
                Medications & Additional Therapies
              </Link>
              <Link href="#" className="flex text-sm font-thin underline">
                Tracking Rett Syndrome
              </Link>
            </div>
            {/*  */}
            <div className="flex-row space-y-5 links">
              <Link
                href="#"
                className="flex font-bold  text-2xl text-[#173462]"
              >
                Staying Connected
              </Link>

              <Link
                href="#"
                className="flex font-bold  text-2xl text-[#173462]"
              >
                Resources
              </Link>
              <Link
                href="/join-us"
                className="flex font-bold  text-2xl text-[#173462]"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <LayoutFooter /> */}
      </section>
    </main>
  );
}
