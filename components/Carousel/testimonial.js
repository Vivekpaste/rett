import { useState, useEffect, useRef } from "react";
import QuoteDownIcon from "@/public/icons/quote-1.svg";
import QuoteUpIcon from "@/public/icons/quote-2.svg";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({
  testimonials,
  controls = true,
  navigation = true,
  bgContainer = "white",
}) => {
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

    // autoplay();
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
    <div className="p-5">
      <div className="container flex items-center content-center justify-between mx-auto  lg:space-x-10 md:space-x-5 text-center  font-figtree">
        {controls ? (
          <div className="hidden md:flex lg:flex">
            <button
              type="button"
              onClick={handlePrev}
              className="items-center content-center justify-center p-2 text-white rounded-full arrow-left bg-crayolaViolet"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          </div>
        ) : (
          ""
        )}

        <div className="relative inline-flex p-10 text-left border-4 border-yellowGreen rounded-2xl ">
          <span
            className={
              "absolute top-[-1rem] left-[-1rem] p-2 bg-" + bgContainer
            }
          >
            <Image
              src={QuoteUpIcon}
              width={0}
              height={0}
              alt="Testimonials"
              className="w-10 h-10 "
            />
          </span>

          <div className="text-2xl font-semibold leading-8 text-navyBlue ">
            <div className="tracking-widest font-figtree-italic">
              {testimonials[currentIndex].text}
              <div className="text-lg text-right font-figtree-semibold text-blackOlive">
                – {testimonials[currentIndex].author}
              </div>
            </div>
          </div>
          <span
            className={
              "absolute bottom-[-1rem] right-[-1rem] p-2 bg-" + bgContainer
            }
          >
            <Image
              src={QuoteDownIcon}
              width={0}
              height={0}
              alt="Testimonials"
              className="w-10 h-10 "
            />
          </span>
        </div>
        {controls ? (
          <div className="hidden md:flex lg:flex">
            <button
              type="button"
              onClick={handlePrev}
              className="items-center content-center justify-center p-2 text-white rounded-full arrow-left bg-crayolaViolet"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        ) : (
          ""
        )}
        {/* dots */}
      </div>
      {navigation ? (
        <div className="container items-center content-center justify-center w-full mx-auto mt-10 ">
          <div className="flex items-center content-center justify-center ">
            <div className="items-center content-center justify-center space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-yellowGreen" : "bg-gray-300"
                  } transition-colors duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Carousel;
