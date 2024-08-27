import React from 'react'
import Image from 'next/image';
import PrimaryButton from '../UI/PrimaryButton';

const CardLeftRight = ({title, text, imageSrc, imageAlt, buttons, imageLeft = true}) => {

    const imagePlace = imageLeft ? 'md:flex-row' : 'md:flex-row-reverse';

    return (
      <div className={`container max-w-full lg:max-w-[1440px] mx-auto flex flex-col items-center mt-10 ${imagePlace}`}>
        <div className="w-full md:w-[50%]">
          <Image
            src={imageSrc}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            alt={imageAlt}
          />
        </div>
        <div className="items-center content-center w-full md:w-[50%] p-6 md:p-10 text-center">
          <h2 className="font-figtree-semibold text-[43px] md:text-[45px] leading-[52px] mb-2 md:mb-5 text-navy">
            {title}
          </h2>
          <p className="font-figtree text-[18px] leading-[27px] text-darkGrey max-w-[267px] mx-auto">
            {text}
          </p>
          <div className="flex flex-col gap-2 items-center content-center justify-center mt-5 text-center">
            {buttons.map((buttonText, index) => (
              <PrimaryButton key={index} text={buttonText} icon={true} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default CardLeftRight