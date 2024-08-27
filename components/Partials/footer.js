"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function footer() {
  return (
    <div className="bg-[#173462]  w-full flex py-12">
      <div className="container p-5 mx-auto space-y-12 md:p-0 lg:p-0">
        <div className="flex-row w-full ">
          {/* logo */}
          <div className="flex w-full ">
            <Image
              src="/logo/acadia-white.svg"
              alt="acadia"
              width={0}
              height={0}
              className="w-64 "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-3 md:grid-cols-3 lg:grid-cols-3 ">
          <div className="tracking-wider text-white ">
            <ul className="space-y-3 list-none">
              <li className="text-sm font-bold">About Rett Syndrome</li>
              <li className="text-xs ">
                <Link href="#">What is Rett Syndrome ?</Link>
              </li>
              <li className="text-xs ">
                <Link href="#">Clinical Presentation</Link>
              </li>
              <li className="text-xs ">
                <Link href="#">Understanding the impact</Link>
              </li>
              <li className="py-5 text-sm font-bold">
                <Link href="#" className="">
                  Diagnosis & Genetic Testing
                </Link>
              </li>
            </ul>
          </div>
          <div className="tracking-wider text-white ">
            <ul className="space-y-3 text-xs list-none">
              <li className="text-sm font-bold ">Treatment</li>
              <li className="text-xs ">
                <Link href="#">Multidisciplinary Treatment Approach</Link>
              </li>
              <li className="text-xs ">
                <Link href="#">Tracking Rett Syndrome</Link>
              </li>
              <li className="text-xs ">
                <Link href="#">Medications & Additional Therapies</Link>
              </li>
              <li className="py-5 text-sm font-bold">
                <Link href="#" className="text-sm">
                  Communication Tools
                </Link>
              </li>
            </ul>
          </div>
          <div className="tracking-wider text-white ">
            <h3 className="pb-3 text-sm font-bold md:mb-5 lg:mb-5">
              Resources
            </h3>
            <h3 className="pb-3 text-sm font-bold">Sign up for Updates</h3>
            <div className="flex">
              <Link
                href="/join-us"
                className="bg-[#9E3795] text-sm  rounded-3xl text-center px-7 text-sm py-3 content-center items-center gap-4    font-bold text-white flex justify-between"
              >
                Join us
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-row ">
          <div className="grid grid-cols-1 font-bold tracking-wider text-white md:grid-cols-2 lg:grid-cols-2 ">
            <div className="grid grid-cols-2 space-y-2 md:grid-cols-4 lg:grid-cols-4">
              <div>
                <Link href="#" className="text-sm">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link href="/sitemap" className="text-sm">
                  Sitemap
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm">
                  Terms of Use
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm">
                  Cookies Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="text-sm text-white ">
            <div className="hidden md:inline-block lg:inline-block">
              <p>
                This website is intended for use by US healthcare professionals.
              </p>
              <p>© 2024 Acadia Pharmaceuticals Inc.</p>

              <p>
                Acadia is a registered trademark of Acadia Pharmaceuticals Inc.
                All rights reserved.
              </p>
              <p>RETT-0034-v2 8/24</p>
            </div>
            <div className="md:hidden lg:hidden">
              <p>
                This website is intended for use by US healthcare professionals.
                © 2024 Acadia Pharmaceuticals Inc. Acadia is a registered
                trademark of Acadia Pharmaceuticals Inc. All rights reserved.
                RETT-0034-v2 8/24
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
