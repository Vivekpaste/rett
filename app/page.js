"use client";
import { useEffect, useState } from "react";
import SecondaryButton from "@/components/UI/SecondaryButton";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PrimaryButton from "@/components/UI/PrimaryButton";
import InfoButton from "@/components/UI/InfoButton";
import JoinUsForm from "@/components/Partials/joinUsForm";
import Link from "next/link";
import LayoutHeader from "@/components/Partials/header";
import LayoutFooter from "@/components/Partials/footer";
// icons svg

import ArrowLeftIcon from "@/public/icons/arrow-left-icon.svg";
import ArrowRightIcon from "@/public/icons/arrow-right-icon.svg";
import JoinUsIcon from "@/public/icons/join-us-icon.png";
import QuoteUpIcon from "@/public/icons/quote-2.svg";
import QuoteDownIcon from "@/public/icons/quote-1.svg";
import Carousel from "@/components/Carousel";
import CardLeftRight from "@/components/Cards/CardLeftRight";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const slides = [
  {
    id: 1,
    src: "/carousel/banner.png",
    alt: "Slide 1",
    title:
      ' <h5 className="font-semibold lg:text-2xl md:text-2xl">               Lets Talk About the              </h5>              <h2 className="text-4xl font-semibold md:text-6xl lg:text-6xl">               Possibilites in Rett syndrome             </h2>',
    desc:
      "Rett syndrome is a rare neurodevelopmental condition that typically begins in early childhood and impacts brain development. Although Rett syndrome occurs in mostly females, it can also affect males in rarer cases.",
  },
  // {
  //   id: 2,
  //   src: "/carousel/banner3.png",
  //   alt: "Slide 2",
  //   title:
  //     ' <h5 className="font-semibold lg:text-2xl md:text-2xl">               Lets Talk About the              </h5>              <h2 className="text-4xl font-semibold md:text-6xl lg:text-6xl">                Possibilites in Rett syndrome            </h2>',
  //   desc:
  //     "Rett syndrome is a rare neurodevelopmental condition that typically begins in early childhood and impacts brain development. Although Rett syndrome occurs in mostly females, it can also affect males in rarer cases.",
  // },
  // {
  //   id: 3,
  //   src: "/carousel/banner2.png",
  //   alt: "Slide 3",
  //   title:
  //     ' <h5 className="font-semibold lg:text-2xl md:text-2xl">               Lets Talk About the </h5>  <h2 className="text-4xl font-semibold md:text-6xl lg:text-6xl">              Possibilites in Rett syndrome   </h2>',
  //   desc:
  //     "Rett syndrome is a rare neurodevelopmental condition that typically begins in early childhood and impacts brain development. Although Rett syndrome occurs in mostly females, it can also affect males in rarer cases.",
  // },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = slides.length;
  // useEffect(() => {
  //   console.log("index", currentIndex);
  //   console.log("slides", slides[currentIndex]);
  // }, [currentIndex]);
  // useEffect(() => {
  //   console.log("errors", Object.values(errors));
  //   // console.log("slides", slides[currentIndex]);
  // }, [errors]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);
  const nextSlide = () => {
    //
    if (currentIndex < slideCount - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      // console.log("index", currentIndex);
    } else {
      setCurrentIndex(0);
    }
    // console.log("index", currentIndex);
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(slideCount - 1);
    }
  };

  return (
    <main className="min-h-screen ">
      {/* top navbar */}
      {/* <LayoutHeader /> */}
      <div className="container relative flex justify-between p-5 mx-0 md:mx-auto lg:mx-auto">
        {/* Images with text */}
        <div className=" w-full transition-all duration-500 ease-in-out">
          <div className="relative slider">
            <Image
              src={slides[currentIndex].src}
              width={0}
              height={0}
              sizes="100vw"
              className="hidden w-full h-auto lg:flex md:flex rounded-3xl"
              alt="Possibilities in Rett syndrome"
            />
            <Image
              src="/carousel/banner-mobile.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto md:hidden lg:hidden rounded-3xl"
              alt="Possibilities in Rett syndrome"
            />
            <div className="bg-[#8BC43F] text-white rounded-3xl px-5 md:px-10 lg:px-10 py-6 absolute bottom-40 lg:left-10 md:left-10 left-5 max-w-[566px]">
              <h5 className="font-figtree-semibold text-2xl">
                Lets talk about
              </h5>
              <h2 className="font-figtree-semibold text-[45px] leading-[52px]">
                Advancing the Rett <br /> syndrome conversation
              </h2>
            </div>
            <div className="bg-white lg:flex md:flex hidden border border-[#8BC43F] mt-2 rounded-3xl px-8 py-5 absolute bottom-6 left-10 max-w-[566px]">
              <p className="font-figtree-medium text-navy text-base leading-[27px] max-w-[570px]">
                {" "}
                Rett syndrome is a complex, progressive, and multisystem
                disorder that primarily affects girls. Continue reading to learn
                about the treatment possibilities.
              </p>
            </div>

            {/* Learn more CTA */}
            <div className="flex items-center content-center justify-center mt-10 text-center absolute bottom-5 right-5">
              <InfoButton text="Learn more about Rett syndrome" icon={true} />
            </div>
          </div>
        </div>
      </div>

      {/* subscription */}
      <div className="container justify-center p-5 mx-auto lg:flex md:flex ">
        <div className="lg:space-x-4 text-center md:space-x-4 lg:flex md:flex justify-between rounded-3xl md:rounded-full px-10 py-6 md:py-2 bg-[#F4FAEC] border-2 border-[#8BC43F] content-center items-center">
        <div className="font-figtree-semibold text-2xl leading-7 mb-5 text-center text-[#173462] md:text-4xl md:leading-[65px] md:mb-0">
            Access helpful resources by joining our mailing list
          </div>
          <SecondaryButton text="Join us" icon={true} />
        </div>
      </div>

      {/*card section 1*/}
      <CardLeftRight 
      title="Diagnosing Rett syndrome"
      text="Learn more about the diagnostic criteria for typical and atypical Rett syndrome and genetic testing"
      imageSrc="/images/homepage/diagnosing-rett-ing-desktop.png"
      imageAlt="Tracking Rett Syndrome"
      buttons={['See diagnostic criteria', 'Resources for genetic testing']}
      imageLeft={true}
      />

      {/*card section 2*/}
      <CardLeftRight 
       title="Comprehensive care in Rett syndrome"
       text="Discover the importance of a multidisciplinary treatment approach"
       imageSrc="/images/comprehensive-care.png"
       imageAlt="Comprehensive Care"
       buttons={['Learn more']}
       imageLeft={false} // Image on the right, text on the left
       />

      {/*card section 3*/}
      <CardLeftRight 
      title="Resources & support"
      text="Access helpful resources for healthcare professionals and caregivers"
      imageSrc="/images/resource-support.png"
      imageAlt="Resource and support"
      buttons={['Explore resources']}
      imageLeft={true}
      />

      {/* Life with Rett syndrome */}
      <section className="bg-feta py-[90px] mt-[73px]">
        <div className="text-center">
          <h2 className="font-figtree-semibold text-navyBlue text-[26px] md:text-[45px] leading-[38px] mb-4">
            Life with Rett syndrome
          </h2>
          <p className="font-figtree text-[18px] px-6 text-blackOlive mb-12">
            See how patients with Rett syndrome and their families are finding
            joy in everyday moments
          </p>

          <div className="flex flex-col justify-center gap-6 md:gap-[25px] md:flex-row mb-16 px-6">
            {/* Left Div */}
            <div className="flex flex-col items-start max-w-[500px] relative">
              <Image
                src="/images/meet-lucy.png"
                width={0}
                height={0}
                className="w-full rounded-3xl"
                alt="Meet families living with Rett syndrome"
              />
              <div className="flex items-center content-center justify-center text-center absolute bottom-[105px] right-5">
                <a
                  href="#"
                  className="font-figtree-semibold text-base leading-[12px] bg-[#9E3795] rounded-[35px] text-center pl-5 content-center items-center gap-4 pt-3 pb-3 py-1.5 pr-1 text-white flex justify-between"
                >
                  <span>Meet Lucy</span>
                  <Image
                    src={JoinUsIcon}
                    width={32}
                    height={32}
                    alt="Why Track"
                  />
                </a>
              </div>
              <p className="font-figtree text-base leading-6 text-left pt-5 text-blackOlive max-w-[390px]">
                Watch Anna and Matthew, Lucy's parents, as they give
                advice to other parents navigating a new Rett syndrome
                diagnosis.
              </p>
            </div>
            {/* Right Div */}
            <div className="flex flex-col items-start max-w-[500px] relative">
              <Image
                src="/images/homepage/minna-img-desktop.png"
                width={0}
                height={0}
                className="w-full rounded-3xl"
                alt="Meet families living with Rett syndrome"
              />
              <div className="flex items-center content-center justify-center text-center absolute bottom-[105px] right-5">
                <a
                  href="#"
                  className="font-figtree-semibold text-base leading-[12px] bg-[#9E3795] rounded-[35px] text-center pl-5 content-center items-center gap-4 pt-3 pb-3 py-1.5 pr-1 font-bold text-white flex justify-between"
                >
                  <span>Meet Minna</span>
                  <Image
                    src={JoinUsIcon}
                    width={32}
                    height={32}
                    alt="Why Track"
                  />
                </a>
              </div>
              <p className="font-figtree text-base leading-6 text-left pt-5 text-blackOlive">
                Learn more about life with Minna, a 4-year-old living<br></br>{" "}
                with Rett syndrome.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mangolia Guide to adventuring Start*/}
      <div class="min-container video-container-home m-auto flex flex-col text-white md:mb-[154px] mb-10 single-post">
        <div class="py-6 px-10 bg-[#2C4E7E]">
          <div class=" max-w-[928px] m-auto md:px-6 px-0 pb-[52px]">
            <div class="flex-shrink-0 xl:object-cover object-contain md:h-[440px] md:mt-[-180px] lg:mt-[-130px] mt-[-114px] xl:w-full md:w-[600px] mx-auto">
              <div class="video-responsive">
                <Image
                  src="/images/homepage/magnolia-img-desktop.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full max-w-[814px] h-auto"
                  alt="Magnolia's Guide to Adventuring"
                />
              </div>
            </div>
            <div class="flex md:flex-nowrap flex-wrap items-center justify-center">
              <div class="flex-none mr-[38px]">
                <Image
                  src="/images/homepage/magnolia-badge-img.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[162px] h-auto"
                  alt="Magnolia's Guide to Adventuring"
                />
              </div>
              <div class="flex-initial">
                <p class="font-figtree-medium text-base leading-[27px] mb-6 text-[#FFF] post-body min-h-[60px]">
                  Follow the journey of Magnolia, a 13-year-old <br></br>living
                  with Rett syndrome.{" "}
                </p>
                <div className="btn">
                  <SecondaryButton
                    text="Meet Magnolia"
                    icon={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mangolia Guide to adventuring Ends*/}

      {/* signup form start*/}
      <div className="container flex justify-center mx-auto mt-[-90px] md:mt-[-200px]">
        <div className="bg-[#AED67A] rounded-t-2xl py-5 flex flex-col items-center md:flex-row lg:flex-row">
          <div className="w-full md:w-[50%] px-6 md:px-20 md:pt-10 form">
            <h3 className="font-figtree-semibold text-white text-4xl text-center md:text-left">
              Stay up to date with the latest information about Rett syndrome
            </h3>
            <p className="mt-10 text-gray-950">
              Thank you for your interest in receiving information from us.{" "}
              <br></br>Please provide the following information:
            </p>
            <JoinUsForm />
          </div>

          <div className="w-full md:w-[50%] p-10 img">
            <Image
              src="/images/signup.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-w-[524px] mx-auto rounded-2xl"
              alt="Receive information about Rett syndrome"
            />
          </div>
        </div>
      </div>
      {/* signup form end*/}

      {/* footer */}
      {/* <LayoutFooter /> */}
    </main>
  );
}
