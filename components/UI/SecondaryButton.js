import React from "react";
import { ArrowRight } from "lucide-react";

export default function SecondaryButton({
  text,
  onClick = null,
  icon = false,
  style = null,
}) {
  let arrowIcon;
  if (icon) {
    arrowIcon = (
      <span className="p-1 bg-white rounded-full ">
        <ArrowRight width={5} height={5} className="w-5 h-5 text-hoverGreen" />
      </span>
    );
  }
  return (
    <button
      onClick={onClick}
      className={
        "font-figtree-semibold text-base text-white bg-hoverGreen rounded-3xl text-center py-[10px] px-[20px] content-center items-center gap-4 font-bold inline-flex justify-between" +
        style
      }
    >
      <span>{text}</span>
      {arrowIcon}
    </button>
  );
}
