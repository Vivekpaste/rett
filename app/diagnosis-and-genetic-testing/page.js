"use client";
import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Carousel from "@/components/Carousel/testimonial";
import Accordion from "@/components/Accordion";
import CrawlingBabyIcon from "@/public/icons/crawling-baby.svg";
import DividerArrowIcon from "@/public/icons/divider-arrow.svg";
import FemaleBabyIcon from "@/public/icons/3year-old-female-icon.svg";

import AppleIcon from "@/public/icons/apple-icon.svg";
import BrainIcon from "@/public/icons/brain-icon.svg";
import FeedingIcon from "@/public/icons/feeding-icon.svg";
import SpoonForkIcon from "@/public/icons/spoon-fork-icon.svg";
import DnaIcon from "@/public/icons/dna-icon.svg";

import { ArrowRight } from "lucide-react";
import PrimaryButton from "@/components/UI/PrimaryButton";

const testimonials = [
  {
    id: 1,
    text: "So, within Rett syndrome, there’s a period of regression where they lose quite a bit of their skills. So for our daughter, she was verbal, and then she lost that. !",
    author: "Caregiver of a child with Rett syndrome",
  },
  {
    id: 2,
    text: "Well, the first 2 and a half years, we didn’t know that there was anything wrong with her. She had hit all of her milestones up until that point, and then she suffered quite a significant regression. But I think the aspects of her personality are still there. It’s embedded that she is a cheerful, sweet, sassy girl.",
    author: "Caregiver of a child with Rett syndrome",
  },
];
const patientCarousel = [
  {
    id: 1,
    text: "Before her official diagnosis of Rett syndrome, all our daughter’s therapies were 100% out of pocket.",
    author: "Caregiver to a 15-year-old  with Rett syndrome",
  },
];

export default function DiagnosisPage() {
  return (
    <main className="min-h-screen font-figtree ">
      {/* top navbar */}
      {/* <LayoutHeader /> */}
      <HeroSection
        title="Diagnosis and Genetic Testing"
        banner="/images/diagnosis-and-genetic-testing.png"
      />
      <section className="mt-0 bg-ghostWhite">
        <div className="container flex-row px-5 py-20 mx-auto ">
          <div className="grid grid-cols-1 space-y-5 lg:space-x-4 md:space-y-0 lg:space-y-0 md:space-x-3 gap-x-3 md:grid-cols-2 lg:grid-cols-2">
            <div className="">
              <p className="text-2xl text-start md:text-3xl lg:text-4xl leading-[1] font-figtree-semibold text-navyBlue ">
                Caregivers recount how regression presented in their children
                with Rett syndrome
              </p>
            </div>
            <div className="">
              <p className="text-lg text-start font-figtree text-blackOlive md:w-[100%] lg:w-[80%] tracking-wider">
                In most cases of Rett syndrome, the first indication to families
                that something is wrong is a period of regression where a child
                loses acquired skills or misses developmental milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-10 bg-honeyDew md:px-0 lg:px-0 md:pt-20 lg:pt-20 md:pb-64 lg:pb-64">
        <Carousel testimonials={testimonials} className="pb-20" />
      </section>
      <section className="">
        <div className="container mx-auto">
          <div className="flex-col-reverse flex md:flex-row lg:flex-row md:-mt-40 lg:-mt-40 mt-10  rounded-[2.5rem] bg-[url('/images/regression-bg-mobile.png')] lg:md:bg-[url('/images/regressiob-bg.png')] md:bg-[url('/images/regressiob-bg.png')]  bg-cover bg-right min-h-[330px] ">
            <div className="w-full p-10 space-y-5 tracking-wide text-white md:w-1/2 lg:w-1/2 ">
              <h2 className="md:text-5xl lg:text-5xl text-3xl  font-figtree-semibold  leading-[1.5] md:lg-10 lg:mt-10">
                Regression is followed by a period of stabilization*
              </h2>
              <p className="md:text-2xl lg:text-2xl text-lg font-figtree leading-[1.5] ">
                In this period, some patients may show improvements and regain
                some skills lost during the regression.
              </p>
            </div>

            <div className="w-full p-10 space-y-5 tracking-wide text-white md:w-1/2 lg:w-1/2 min-h-64 "></div>
          </div>
          <div className="flex-row w-full p-5 text-sm md:p-2 lg:p-2 ">
            Because MECP2 mutations are now identified in some individuals prior
            to any clear evidence of regression, the diagnosis of “possible”
            Rett syndrome should be given to those individuals younger than 3
            years old who have not lost any skills but otherwise have clinical
            features suggestive of Rett syndrome. These individuals should be
            reassessed every 6–12 months for evidence of regression. If
            regression manifests, a definitive diagnosis of Rett syndrome can be
            made.
          </div>
        </div>
      </section>
      <section className="w-full bg-ghostWhite md:min-h-80 lg:min-h-80 ">
        <div className="container p-5 py-10 mx-auto">
          <div className="space-y-5">
            <h3 className="w-full text-3xl text-navyBlue font-figtree-medium">
              Clinical diagnosis
            </h3>
            <p className="w-full text-md text-blackOlive font-figtree">
              Rett syndrome requires a clinical diagnosis based on consensus
              clinical criteria, yet this path is rarely straightforward.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="container py-10 mx-auto px-5 lg:px-0 md:px-0 tablet:px-0 ">
          <div className="bg-white rounded-3xl border border-[#F1E1EF] md:-mt-48 lg:-mt-48 w-full justify-center md:p-8 p-5 lg:p-10">
            <div className="w-full py-10 text-2xl tracking-wide text-center font-figtree-semibold text-navyBlue">
              Diagnosis of Rett syndrome is based on clinical presentation
            </div>
            <div className="flex justify-center w-full space-x-10">
              <div className="flex flex-col  items-center content-center w-32 md:w-40 lg:w-60 justify-center space-y-5 text-center ">
                <div className="flex">
                  <Image
                    src={CrawlingBabyIcon}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[5rem] md:w-[7rem] lg:w-[8rem]"
                  />
                </div>

                <h4 className="text-navyBlue  text-center text-lg   w-full font-figtree leading-[1.1] ">
                  Signs of Rett syndrome first appear between
                </h4>
                <h1 className="text-navyBlue  text-center text-3xl  w-full font-figtree-bold leading-[1.1] ">
                  6-18 months
                </h1>
              </div>
              <div className="flex  md:content-center md:items-center lg:content-center lg:items-center align-top lg:align-middle md:align-middle ">
                <Image
                  src={DividerArrowIcon}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[4rem] md:w-[5rem] lg:w-[5.8rem]"
                />
              </div>
              <div className="flex flex-col w-32 md:w-40 lg:w-60 items-center content-center justify-center space-y-5 text-center ">
                <div className="flex">
                  <Image
                    src={FemaleBabyIcon}
                    width={0}
                    height={0}
                    className=" md:w-20 w-14  lg:w-24"
                  />
                </div>
                <h4 className="text-navyBlue  text-center  text-lg  font-figtree leading-[1.1] ">
                  Signs of Rett syndrome first appear between
                </h4>
                <h1 className="text-navyBlue  text-center text-3xl  w-full font-figtree-bold leading-[1.1] ">
                  6-18 months
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between mt-10 space-x-0 md:space-x-5 lg:space-x-5 md:flex-row lg:flex-row">
            <div className="w-full md:w-2/4 lg:w-2/4 md:divide-y space-y-5 lg:divide-y lg:divide-[#979797] md:divide-[#979797]">
              <h3 className="px-5 text-3xl tracking-wide font-figtree-semibold text-navyBlue">
                Rett syndrome includes both typical and atypical presentations
              </h3>
              <Accordion title="Typical and atypical Rett syndrome diagnostic criteria ">
                <p className="tracking-wide font-figtree text-pretty text-blackOlive ">
                  Typical (or classic) Rett syndrome and atypical (or variant)
                  Rett syndrome presentations require a period of regression
                  followed by a recovery or stabilization* period and are
                  characterized by additional main, supportive, and exclusion
                  criteria.
                </p>
                <p className="mt-10 text-sm text-blackOlive font-figtree text-pretty">
                  Because MECP2 mutations are now identified in some individuals
                  prior to any clear evidence of regression, the diagnosis of
                  “possible” Rett syndrome should be given to those individuals
                  under 3 years old who have not lost any skills but otherwise
                  have clinical features suggestive of Rett syndrome. These
                  individuals should be reassessed every 6–12 months for
                  evidence of regression. If regression manifests, a definitive
                  diagnosis of Rett syndrome can be made. However, if the child
                  does not show any evidence of regression by 5 years, the
                  diagnosis of Rett syndrome should be questioned.
                </p>
              </Accordion>
              <Accordion title="Required for typical (or classic) Rett syndrome">
                <ul className="ml-6 space-y-5 list-disc list-outside marker:text-yellowGreen">
                  <li className="text-2xl tracking-wide text-blackOlive">
                    All main criteria and all exclusion criteria
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Supportive criteria are not required, although often present
                    in typical Rett syndrome
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Required for atypical (or classic) Rett syndrome">
                <ul className="ml-6 space-y-5 list-disc list-outside marker:text-yellowGreen">
                  <li className="text-2xl tracking-wide text-blackOlive">
                    At least 2 of the 4 main criteria
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    5 of the 11 supportive criteria
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Main criteria">
                <ul className="ml-6 space-y-5 list-disc list-outside marker:text-yellowGreen">
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Partial or complete loss of acquired purposeful hand skills
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Partial or complete loss of acquired spoken language†
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Gait abnormalities (impaired or absence of ability)
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Stereotypic hand movements (hand wringing, squeezing,
                    clapping/tapping, mouthing, washing/rubbing automatisms
                  </li>
                </ul>
                <p className="mt-10">
                  †Loss of acquired language is based on best acquired spoken
                  language skill, not strictly on the acquisition of distinct
                  words or higher language skills. Thus, an individual who had
                  learned to babble but then loses this ability is considered to
                  have a loss of acquired language.
                </p>
              </Accordion>
              <Accordion title="Exclusion criteria for typical Rett syndrome">
                <ul className="ml-6 space-y-5 list-disc list-outside marker:text-yellowGreen">
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Brain injury secondary to trauma (peri- or postnatally),
                    neurometabolic disease, or severe infection that causes
                    neurological problems‡
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Grossly abnormal psychomotor development in first 6 months
                    of life§
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Gait abnormalities (impaired or absence of ability)
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Stereotypic hand movements (hand wringing, squeezing,
                    clapping/tapping, mouthing, washing/rubbing automatisms
                  </li>
                </ul>
                <p className="mt-10 font-figtree">
                  ‡ There should be clear evidence (neurological or
                  ophthalmological examination and MRI/CT) that the presumed
                  insult directly resulted in neurological dysfunction.
                </p>
                <p className="mt-10 font-figtree">
                  § There should be clear evidence (neurological or
                  ophthalmological examination and MRI/CT) that the presumed
                  insult directly resulted in neurological dysfunction.
                </p>
              </Accordion>
              <Accordion title="Supportive criteria">
                <ul className="ml-6 space-y-5 list-disc list-outside marker:text-yellowGreen">
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Breathing disturbances while awake¶
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Bruxism while awake
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Abnormal muscle tone
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Peripheral vasomotor disturbances
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Scoliosis/kyphosis
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Growth abnormalities
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Small, cold hands and feet
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Inappropriate laughing or screaming spells
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    Diminished response to pain
                  </li>
                  <li className="text-2xl tracking-wide text-blackOlive">
                    “Eye pointing”/intense eye communication
                  </li>
                </ul>
                <p className="mt-10 font-figtree">
                  ¶ If an individual has or ever had a clinical feature listed
                  it is counted as a supportive criterion. Many of these
                  features have an age dependency, manifesting and becoming more
                  predominant at certain ages. Therefore, the diagnosis of
                  atypical Rett syndrome may be easier for older individuals
                  than for younger. In the case of a younger individual (under 5
                  years old) who has a period of regression and ≥2 main criteria
                  but does not fulfill the requirement of 5/11 supportive
                  criteria, the diagnosis of “probably atypical Rett syndrome”
                  may be given. Individuals who fall into this category should
                  be reassessed as they age, and the diagnosis revised
                  accordingly.
                </p>
              </Accordion>
            </div>
            <div className="relative w-full p-5 md:flex lg:flex md:w-2/4 lg:w-2/4 md:justify-end lg:justify-end">
              <Image
                src="/images/rettsyndrome.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full lg:h-[35rem] md:h-[35rem] lg:w-[75%] md:w-[75%] md:absolute md:top-0 md:right-0 lg:absolute lg:top-0 lg:right-0"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-ghostWhite">
        <div className="container flex flex-col items-center content-center justify-center py-5 mx-auto space-y-10 lg:py-10 md:py-10 ">
          <div className="flex flex-col justify-center w-full space-y-5 lg:text-center p-5 md:p-0 lg:p-0 md:text-center md:w-[45%] lg:w-[45%]">
            <h1 className="text-3xl md:text-[2.25rem] text-navyBlue font-figtree-semibold tracking-wide leading-[1.1]">
              The role of genetic testing
            </h1>
            <p className="font-figtree text-[1.25rem] tracking-wide leading-[1.5] text-lg text-blackOlive">
              While Rett syndrome is a clinical diagnosis, genetic testing may
              serve as a useful complementary tool. Potential benefits of
              testing include:
            </p>
          </div>

          <div className="grid grid-cols-1 space-y-5 md:grid-cols-4 lg:grid-cols-4 md:space-y-0 lg:space-y-0 lg:space-x-10 md:space-x-10">
            <div className="flex flex-col items-center content-center space-y-5">
              <Image
                src={BrainIcon}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[6.25rem] h-[6.25rem]"
              />
              <p className="font-figtree leading-[1.25] text-[1.125rem] tracking-wide text-center ">
                Access to clinical trials
              </p>
            </div>
            <div className="flex flex-col items-center content-center space-y-5">
              <Image
                src={AppleIcon}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[6.25rem] h-[6.25rem]"
              />
              <p className="font-figtree leading-[1.25] text-[1.125rem] tracking-wide text-center ">
                Insights into various therapies, which may help improve the
                management of a broad range of symptoms
              </p>
            </div>
            <div className="flex flex-col items-center content-center space-y-5">
              <Image
                src={FeedingIcon}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[6.25rem] h-[6.25rem]"
              />
              <p className="font-figtree leading-[1.25] text-[1.125rem] tracking-wide text-center ">
                Insurance eligibility for certain allied health services and
                treatments
              </p>
            </div>
            <div className="flex flex-col items-center content-center space-y-5">
              <Image
                src={SpoonForkIcon}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[6.25rem] h-[6.25rem]"
              />
              <p className="font-figtree leading-[1.25] text-[1.125rem] tracking-wide text-center ">
                Starting management of Rett syndrome earlier
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-5 py-10 bg-honeyDew md:px-0 lg:px-0 ">
        <Carousel
          testimonials={patientCarousel}
          controls={false}
          navigation={false}
          className="pb-20"
        />
      </section>

      <section className="w-full py-10 x-5 md:px-0 lg:px-0">
        <div className="container flex flex-col items-center content-center justify-center mx-auto space-y-5">
          <div className="flex items-center justify-center ">
            <Image
              src={DnaIcon}
              width={0}
              height={0}
              className="w-[6.25rem] h-[6.25rem]"
              sizes="100vw"
            />
          </div>
          <div className="flex items-center  lg:w-[50%] md:w-[70%] w-full flex-col justify-center text-center space-y-5 p-5 ">
            <h3 className="text-4xl tracking-wide text-navyBlue font-figtree-bold ">
              Resources for genetic confirmation
            </h3>
            <p className="font-figtree leading-[1.25] text-[1.5rem] tracking-wide text-blackOlive text-center">
              Genetic testing of MECP2 for suspected Rett syndrome can be
              ordered through the following providers:
            </p>
            <div className="flex justify-center gap-x-5 ">
              <PrimaryButton text="Invitae" icon={true} />
              <PrimaryButton text="GeneDx" icon={true} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ghostWhite py-10 w-full">
        <div className="container mx-auto">
          <div className="flex flex-col content-center items-center space-y-5 justify-center">
            <div className="flex  p-5 text-center justify-center">
              <h3 className="text-crayolaViolet text-lg md:text-lg lg:text-2xl tracking-wide font-figtree-semibold">
                Explore how Rett syndrome is treated and the importance of
                multidisciplinary care.
              </h3>
            </div>
            <div className="flex-row w-90">
              <PrimaryButton
                text="Multidisciplinary Treatment Approach"
                icon={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section>{/* <LayoutFooter /> */}</section>
    </main>
  );
}
