import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div className="mb-2">
    <button
      className="w-full px-4 py-2 text-2xl text-left font-figtree-semibold focus:outline-none text-crayolaViolet"
      onClick={onToggle}
    >
      <h3 className="font-semibold">{title}</h3>
    </button>
    <Transition
      show={isOpen}
      enter="transition-transform duration-300 ease-out"
      enterFrom="transform scale-y-0"
      enterTo="transform scale-y-100"
      leave="transition-transform duration-300 ease-in"
      leaveFrom="transform scale-y-100"
      leaveTo="transform scale-y-0"
    >
      <div className="p-4 ">{children}</div>
    </Transition>
  </div>
);

export default AccordionItem;
