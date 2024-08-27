import React from "react";
import { ArrowRight } from "lucide-react";

export default function PrimaryButton({
  text,
  onClick,
  icon = false,
  styles = null,
}) {
  let arrowIcon;
  if (icon) {
    arrowIcon = (
      <span className="flex p-1 bg-white rounded-full ">
        <ArrowRight
          width={5}
          height={5}
          className={"w-5 h-5 text-crayolaViolet"}
        />
      </span>
    );
  }
  return (
    <button
      onClick={onClick}
      className={
        "font-figtree-semibold bg-crayolaViolet text-base leading-[12px] relative rounded-3xl text-center pl-5 content-center items-center gap-4  py-1.5 pr-1 font-bold text-white flex justify-between " +
        styles
      }
    >
      <span className="flex justify-center w-full text-center">{text}</span>
      {arrowIcon}
    </button>
  );
}
