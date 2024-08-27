import { useState, useEffect, useRef } from "react";
import QuoteDownIcon from "@/public/icons/quote-1.svg";
import QuoteUpIcon from "@/public/icons/quote-2.svg";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text:
      'Imagine losing your <span className="italic">ability to speak.</span> Imagine losing the	<span className="italic">ability to walk,</span> <br />			to use your hands, and to <span className="italic">eat or drink on your own</span> . Imagine having <br /> <span className="italic"> uncontrollable seizures </span>. Now, if you can, <span className="italic"> imagine having all of those </span> <br /> <span className="italic">things happen to you . . . </span>!',
    author: "Rett Syndrome Voice of the Patient Report 2022",
  },
  {
    id: 2,
    text:
      'Imagine losing your <span className="italic">ability to speak.</span> Imagine losing the	<span className="italic">ability to walk,</span> <br />			to use your hands, and to <span className="italic">eat or drink on your own</span> . Imagine having <br /> <span className="italic"> uncontrollable seizures </span>. Now, if you can, <span className="italic"> imagine having all of those </span> <br /> <span className="italic">things happen to you . . . </span>',
    author: "Jane Smith",
  },
  {
    id: 3,
    text:
      'Imagine losing your <span className="italic">ability to speak.</span> Imagine losing the	<span className="italic">ability to walk,</span> <br />			to use your hands, and to <span className="italic">eat or drink on your own</span> . Imagine having <br /> <span className="italic"> uncontrollable seizures </span>. Now, if you can, <span className="italic"> imagine having all of those </span> <br /> <span className="italic">things happen to you . . . </span>',
    author: "Alice Johnson",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    const autoplay = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change testimonial every 3 seconds
    };

    autoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Handle next and previous
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container items-center content-center justify-center mx-auto text-center ">
      <div className="border-4 border-[#8BC434] rounded-2xl p-10 inline-flex text-left relative ">
        <span className="absolute top-[-1rem] left-[-1rem] p-2 bg-[#F4FAEC]">
          <Image
            src={QuoteUpIcon}
            width={0}
            height={0}
            alt="Testimonials"
            className="w-10 h-10 "
          />
        </span>

        <div className="text-2xl font-semibold leading-8 text-navyBlue ">
          <div className="tracking-widest">
            Imagine losing your
            <span className="italic">ability to speak.</span> Imagine losing the{" "}
            <span className="italic">ability to walk,</span> <br />
            to use your hands, and to
            <span className="italic">eat or drink on your own</span> . Imagine
            having <br />
            <span className="italic"> uncontrollable seizures </span>. Now, if
            you can,
            <span className="italic"> imagine having all of those </span>
            <br />
            <span className="italic">things happen to you . . . </span>
            <span className="ml-5 text-right text-sm text-[#3C3C3C]">
              – {testimonials[currentIndex].author}
            </span>
          </div>
        </div>
        <span className="absolute bottom-[-1rem] right-[-1rem] p-2 bg-[#F4FAEC]">
          <Image
            src={QuoteDownIcon}
            width={0}
            height={0}
            alt="Testimonials"
            className="w-10 h-10 "
          />
        </span>
      </div>
      {/* dots */}
      <div className="flex items-center content-center justify-center w-full mt-10 ">
        <div className="flex justify-between w-64 space-x-5">
          <button
            type="button"
            onClick={handlePrev}
            className="arrow-left  bg-[#8BC434]  p-2 rounded-full text-white justify-center content-center items-center"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <div className="items-center content-center justify-center space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[#8BC434]" : "bg-gray-300"
                } transition-colors duration-300`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleNext}
            className=" bg-[#8BC434]  p-2 rounded-full text-white justify-center content-center items-center"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
