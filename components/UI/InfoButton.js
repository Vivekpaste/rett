import React from "react";
import { ArrowRight } from "lucide-react";

export default function InfoButton({
  text,
  onClick,
  icon = false,
  styles = null,
}) {
  let arrowIcon;
  if (icon) {
    arrowIcon = (
      <span className="p-1 bg-[#9E3795] rounded-full ">
        <ArrowRight width={5} height={5} className={"w-5 h-5 text-white"} />
      </span>
    );
  }
  return (
    <button
      onClick={onClick}
      className={
        "font-figtree-semibold text-xl leading-[18px] p-[19px] px-[20px] bg-white rounded-[35px] text-center content-center items-center gap-4 text-[#9E3795] flex justify-between" +
        styles
      }
    >
      <span>{text}</span>
      {arrowIcon}
    </button>
  );
}
