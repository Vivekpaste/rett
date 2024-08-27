"use client";
import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

import PrimaryButton from "@/components/UI/PrimaryButton";
import LossOfSpeechIcon from "@/public/icons/loss-of-speech-icon.svg";
import HandSkillIcon from "@/public/icons/hand-skill-icon.svg";
import HandClappingIcon from "@/public/icons/hand-clapping-icon.svg";
import ImpairedMobilityIcon from "@/public/icons/impaired-mobility-icon.svg";
import NeuroNetworkIcon from "@/public/icons/network-neuro-icon.svg";

import Link from "next/link";

export default function WhatIsRettSyndrome() {
  return (
    <main className="min-h-screen font-figtree ">
      {/* top navbar */}
      {/* <LayoutHeader /> */}
      <HeroSection
        title="About Rett Syndrome"
        banner="/images/what-is-rett-syndrome-banner.png"
      />
      <section className="w-full bg-navyBlue">
        <div className="container mx-auto">
          <div className="flex justify-center items-center space-x-20 text-white">
            <Link href="#" className="py-2 border-b-4 border-yellowGreen ">
              What is Rett Syndrome?
            </Link>
            <Link href="#" className="hidden md:flex lg:flex tablet:flex">
              Clinical Presentation?
            </Link>
            <Link href="#" className="hidden md:flex lg:flex tablet:flex">
              Understand the Impact?
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-0 bg-ghostWhite pb-10">
        <div className="container flex-col px-5 py-20 space-y-5 mx-auto ">
          <div className="">
            <p className="text-2xl text-start md:text-3xl lg:text-4xl leading-[1] font-figtree-semibold text-navyBlue ">
              What is Rett syndrome?
            </p>
          </div>
          <div className="">
            <p className="text-lg text-start font-figtree text-blackOlive w-full tracking-wider leading-relaxed">
              Rett syndrome is a rare developmental disorder that primarily
              affects females but does occur rarely in males. Beginning in early
              childhood, Rett syndrome is characterized by seemingly normal
              development during the first 6 to 18 months,
              <span className="font-figtree-bold mr-2">
                followed by a period of regression
              </span>
              around 1 to 4 years old.
            </p>
          </div>
        </div>

        <div className="container flex-col px-5  mx-auto ">
          <div className="flex flex-col bg-white rounded-3xl  w-full p-5 border border-[#F1E1EF] md:flex-row lg:flex-row">
            <div className="lg:p-5 w-full lg:w-[60%] ">
              <Image
                src="/images/about_rett.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full rounded-3xl"
              />
            </div>
            <div className="lg:p-10 p-5 flex-col flex text-center text-navyBlue tracking-wide space-y-2 justify-center ">
              <p className="font-figtree-bold text-base md:text-base lg:text-lg ">
                Rett syndrome <span className="font-figtree">affects</span>
              </p>
              <p className="font-figtree-bold text-2xl md:text-2xl lg:text-4xl ">
                1 in 10,000
              </p>
              <p className="font-figtree text-base"> females annually</p>
              <p className="font-figtree-bold text-lg"> — </p>
              <p className="font-figtree text-base">There are approximately</p>
              <p className="font-figtree-bold text-2xl md:text-2xl lg:text-4xl ">
                6,000 to 9,000
              </p>
              <p className="font-figtree text-base text-center">
                people living with Rett syndrome in the US alone
              </p>
            </div>
          </div>
        </div>

        <div className="container flex-col mt-10 px-5  mx-auto ">
          <div className=" text-lg">
            <p className="text-blackOlive font-figtree  tracking-wide">
              Common symptoms observed during this time may include:
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 content-center lg:grid-cols-2 lg:gap-4 gap-y-3 md:gap-4 justify-center items-center">
            <div className="flex align-middle space-x-4 items-center justify-center content-center">
              <div className="w-20">
                <Image
                  src={LossOfSpeechIcon}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-15 h-15"
                />
              </div>
              <div className="w-80">
                <p className="text-crayolaViolet  text-lg font-figtree-semibold tracking-wide ">
                  Loss of acquired speech
                </p>
              </div>
            </div>
            <div className="flex align-middle space-x-4 items-center justify-center ">
              <div className="w-20">
                <Image
                  src={HandSkillIcon}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-15 h-15"
                />
              </div>
              <div className="w-80">
                <p className="text-crayolaViolet  text-lg font-figtree-semibold tracking-wide ">
                  Partial or complete loss of hand skills
                </p>
              </div>
            </div>
            <div className="flex align-middle space-x-4 items-center justify-center ">
              <div className="w-20">
                <Image
                  src={HandClappingIcon}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-15 h-15"
                />
              </div>
              <div className="w-80">
                <p className="text-crayolaViolet  text-lg font-figtree-semibold tracking-wide ">
                  Repetitive hand movements like wringing, clapping, tapping
                  and/or mouthing
                </p>
              </div>
            </div>
            <div className="flex align-middle space-x-4 items-center justify-center ">
              <div className="w-20">
                <Image
                  src={ImpairedMobilityIcon}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-15 h-15"
                />
              </div>
              <div className="w-80">
                <p className="text-crayolaViolet  text-lg font-figtree-semibold tracking-wide ">
                  Impaired mobility
                </p>
              </div>
            </div>
          </div>

          <div className=" text-lg mt-10">
            <p className="text-blackOlive font-figtree  tracking-wide">
              Regression is usually followed by a period of stabilization in
              which some patients may partially regain skills.
            </p>
          </div>

          <div className=" flex-col bg-white flex justify-center   rounded-3xl mt-10 w-full p-5 md:p-7 lg:p-10  border-2 border-yellowGreen md:flex-row lg:flex-row">
            <div className="text-center flex flex-col divide-y-4 divide-navyBlue divide-solid  space-y-5 w-full lg:w-[70%] md:w-[90%] ">
              <div className="w-full flex pb-5 text-center">
                <h3 className="text-2xl lg:text-3xl md:text-3xl font-figtree-semibold tracking-wide text-navyBlue">
                  A period of regression followed by a period of stabilization
                  is required for a diagnosis of Rett syndrome.
                </h3>
              </div>

              <div className="w-full flex flex-col pt-10">
                <h4 className="text-lg font-figtree-bold tracking-wide text-navyBlue">
                  Because a diagnosis is based on clinical presentation, a
                  careful history is necessary to determine the presence of
                  regression and to establish symptoms.
                </h4>
                <div className="w-full text-center mt-5 flex justify-center">
                  <PrimaryButton
                    text="Discover more about diagnosing Rett syndrome"
                    icon={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-10 w-full mt-10 lg:mt-20">
        <div className="container mx-auto">
          <div className="flex flex-col mt-10">
            <div className="p-5">
              <h2 className="font-figtree-semibold tracking-wide text-2xl md:text-3xl lg:text-4xl text-navyBlue">
                A complex neurodevelopmental disorder
              </h2>
            </div>
            <div className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-2 lg:space-x-5 md:space-x-3 mt-10">
              <div className="bg-ghostWhite rounded-3xl justify-center items-center content-center p-5  flex-col flex">
                <div className="text-center justify-center content-center items-center">
                  <Image
                    src={NeuroNetworkIcon}
                    width={0}
                    height={0}
                    className="w-[5rem] h-[5rem]"
                  />
                </div>
                <div className="text-crayolaViolet w-full md:w-80 lg:w-80">
                  <p className="font-figtree-semibold tracking-wide text-lg text-center">
                    While once thought to be neurodegenerative, Rett syndrome is
                    now recognized as a complex neurodevelopmental disorder.
                  </p>
                </div>
              </div>
              <div className="p-5 ">
                <ul className="ml-6 space-y-5 list-disc list-outside font-figtree marker:text-yellowGreen leading-relaxed">
                  <li className="text-base ">
                    Neurodegenerative disorders are characterized by neuronal
                    loss over time. Conversely, in neurodevelopmental disorders
                    like Rett syndrome,
                    <span className="font-figtree-bold">
                      there are abnormalities in the early development of the
                      nervous system, but neurons are not lost over time
                    </span>
                  </li>
                  <li className="text-base ">
                    Therefore, in Rett syndrome
                    <span className="font-figtree-bold">
                      intervention at any age can result in symptom improvements
                    </span>
                  </li>
                  <li className="text-base ">
                    Many patients with Rett syndrome
                    <span className="font-figtree-bold">
                      survive into middle age, requiring lifelong care
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex w-full  p-5">
              <p className="font-figtree tracking-wide text-base">
                Given the heterogenous constellation of signs and symptoms and
                multisystem comorbidities, treatment should be grounded in
                multidisciplinary care, with an individualized, proactive
                approach.
              </p>
            </div>
            <div className="w-full p-5 justify-center flex content-center items-center">
              <div className=" flex-col bg-white flex justify-center w-full md:w-[70%] lg:w-[60%]    rounded-3xl  p-5 md:p-7 lg:p-10  border-2 border-yellowGreen md:flex-row lg:flex-row">
                <div className="w-full ">
                  <h4 className="text-navyBlue font-figtree-semibold text-lg text-center tracking-wide">
                    A multidisciplinary treatment approach may improve Rett
                    syndrome symptoms for individuals of all ages.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ghostWhite py-10 w-full">
        <div className="container mx-auto flex-col flex ">
          <div className="p-5">
            <h1 className="text-navyBlue text-3xl font-figtree-semibold tracking-wide">
              Current genetic understanding of Rett syndrome
            </h1>
          </div>
          <div className="text-blackOlive text-[1rem] space-y-5 p-5">
            <p>
              Most cases of Rett syndrome are caused by spontaneous mutations in
              the <span className="font-figtree-italic"> MECP2 </span> gene
              located on the X chromosome.
            </p>

            <p>
              <span className="font-figtree-italic"> MECP2 </span> mutations are
              rare in males with Rett syndrome. Because males have 1 copy of the
              <span className="font-figtree-italic"> MECP2 </span> gene, males
              with <span className="font-figtree-italic"> MECP2 </span>
              mutations present differently, with early onset and greater
              disease severity in comparison to females with typical Rett
              syndrome.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:space-x-5 md:space-x-3 p-5 mt-10">
            <div className="bg-[#E5EDF6] rounded-3xl justify-center items-center content-center p-5  flex-col flex">
              <div className="text-center justify-center content-center items-center">
                <Image
                  src={NeuroNetworkIcon}
                  width={0}
                  height={0}
                  className="w-[5rem] h-[5rem]"
                />
              </div>
              <div className="text-crayolaViolet w-full md:w-80 lg:w-80">
                <p className="font-figtree-semibold tracking-wide text-lg text-center">
                  Findings from animal models showthat the
                  <span className=" italic "> Mecp2 </span> gene is vital for
                  normal brain development and function
                </p>
              </div>
            </div>
            <div className="p-5 justify-center content-center ">
              <ul className="ml-6 space-y-5 list-disc list-outside font-figtree marker:text-yellowGreen leading-relaxed">
                <li className="text-base ">
                  <span className="font-figtree-bold">
                    <span className=" italic ">MeCP2 </span> protein serves as a
                    key transcriptional regulator
                  </span>
                  , playing a pivotal role in every stage of brain development
                </li>
                <li className="text-base ">
                  Animal models suggest that the
                  <span className="font-figtree-bold">
                    loss of functional <span className=" italic ">MeCP2</span>
                    may lead to deficits in synaptic maturation in the brain
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:space-x-5 p-5 md:space-x-3 mt-10">
            <div className="bg-[#E5EDF6] rounded-3xl justify-center items-center content-center p-5  flex-col flex">
              <div className="text-center justify-center content-center items-center">
                <Image
                  src={NeuroNetworkIcon}
                  width={0}
                  height={0}
                  className="w-[5rem] h-[5rem]"
                />
              </div>
              <div className="text-crayolaViolet w-full md:w-80 lg:w-80">
                <p className="font-figtree-semibold tracking-wide text-lg text-center">
                  As seen in preclinical models,the loss of
                  <span className=" italic "> Mecp2 </span> results in the
                  reduction of key neural growth factors and disruption of
                  neurotransmitter systems
                </p>
              </div>
            </div>
            <div className="p-5 justify-center content-center ">
              <ul className="ml-6 space-y-5 list-disc list-outside font-figtree marker:text-yellowGreen leading-relaxed">
                <li className="text-base ">
                  Brain-derived neurotrophic factor (BDNF) is a key neural
                  signal that is downstream of
                  <span className="italic"> MECP2 </span> function and plays a
                  key role regulating neuronal health and supporting synaptic
                  plasticity
                </li>
                <li className="text-base ">
                  Patients with Rett syndrome demonstrate lower levels of BDNF
                  and altered BDNF processing
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-5 justify-center flex content-center items-center md:-mb-24 -mb-12 lg:-mb-24">
            <div className=" flex-col bg-white flex justify-center w-full md:w-[70%] lg:w-[60%]     rounded-3xl  p-5 md:p-7 lg:p-10  border-2 border-yellowGreen md:flex-row lg:flex-row">
              <div className="w-full ">
                <h4 className="text-navyBlue font-figtree-semibold text-lg text-center tracking-wide">
                  While most cases of Rett syndrome have mutations in the MECP2
                  gene, mutations in other loci, such as CDKL5 and FOXG1, have
                  been reported in atypical Rett syndrome variants.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full py-10 md:mt-20 lg:mt-20">
        <div className="container mx-auto flex flex-col">
          <div className="p-5">
            <h1 className="text-navyBlue text-3xl font-figtree-semibold tracking-wide">
              Rett syndrome is a clinical diagnosis
            </h1>
          </div>
          <div className="text-blackOlive text-[1rem]  p-5">
            <p className="text-[1rem]">
              Mutations in <span className="font-figtree-italic"> MECP2 </span>
              are not synonymous with Rett syndrome, and a mutation in the gene
              is not required to make a diagnosis. However, genetic testing and
              confirmation can be a useful tool.
            </p>
          </div>
          <div className="p-5 w-full md:w-80 lg:w-80">
            <PrimaryButton
              className="text-left"
              text="Discover more about diagnosing Rett syndrome"
              icon
            />
          </div>
        </div>
      </section>

      <section className="bg-ghostWhite py-10 w-full">
        <div className="container mx-auto flex-col flex ">
          <div className="p-5">
            <h1 className="text-navyBlue text-3xl font-figtree-semibold tracking-wide">
              The importance of synaptic plasticity
            </h1>
          </div>
          <div className="text-blackOlive  tracking-wide text-[1rem] leading-relaxed space-y-5 p-5">
            <p className="font-figtree ">
              Synaptic plasticity enables neural firing to strengthen
              connections and communication between neurons and neural networks.
              <span className="font-figtree-bold">
                This idea is often summarized as, “Neurons that fire together,
                wire together.”
              </span>
            </p>

            <p className="font-figtree-bold">
              In Rett syndrome, therapeutic modalities designed to stimulate
              neural pathways may rely in part on the fire-and-wire plasticity
              to affect physical and/or behavioral improvements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
