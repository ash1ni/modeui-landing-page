import React from "react";

import { Img } from "components";

const DesktopLogocloud = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-7xl sm:px-5 px-8 w-full">
          <div className="flex md:flex-col flex-row gap-8 items-center justify-between max-w-[1216px] w-full">
            <div className="flex flex-col items-center justify-center p-2 w-auto">
              <Img
                className="h-6 w-[98px]"
                src="images/img_companylogo.svg"
                alt="companylogo"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-auto">
              <Img
                className="h-6 w-[68px]"
                src="images/img_settings_black_900.svg"
                alt="settings_One"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-auto">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-6 md:h-auto object-cover w-full"
                  src="images/img_image20.png"
                  alt="imageTwenty"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-auto">
              <Img
                className="h-6 w-[106px]"
                src="images/img_companylogo_gray_900_01.svg"
                alt="companylogo_One"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-auto">
              <Img
                className="h-6 w-[98px]"
                src="images/img_settings_gray_900_02.svg"
                alt="settings_Two"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-auto">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-6 md:h-auto object-cover w-full"
                  src="images/img_image18.png"
                  alt="imageEighteen"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-auto">
              <Img
                className="h-6 w-[102px]"
                src="images/img_companylogo_teal_900.svg"
                alt="companylogo_Two"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-auto">
              <Img
                className="h-6 w-[132px]"
                src="images/img_companylogo_black_900.svg"
                alt="companylogo_Three"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopLogocloud.defaultProps = {};

export default DesktopLogocloud;
