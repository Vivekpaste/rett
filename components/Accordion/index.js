"use client";
import React, { useState } from "react";
// import { ChevronDownIcon, ChevronUpIcon } from "@hero";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="overflow-hidden ">
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full px-4 py-2 text-2xl tracking-wider text-left font-figtree-semibold text-crayolaViolet focus:outline-none"
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="w-10 h-10 text-crayolaViolet" />
        ) : (
          <ChevronDown className="w-10 h-10 text-crayolaViolet" />
        )}
      </button>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[45rem]" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
