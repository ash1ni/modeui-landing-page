import React from "react";

import { Img, Text } from "components";

const DesktopTestimonial = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-7xl p-8 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1216px] w-full">
            <div className="flex flex-col gap-12 items-center justify-start max-w-[824px] w-full">
              <div className="flex flex-col gap-8 items-center justify-start max-w-[824px] w-full">
                <Img
                  className="h-6 w-[98px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="leading-[40.00px] max-w-[824px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                  size="txtManropeMedium32"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start w-auto">
                <div className="flex flex-col gap-4 items-center justify-center w-auto">
                  <div className="flex flex-col h-16 items-center justify-start w-16">
                    <Img
                      className="h-16 md:h-auto rounded-[50%] w-16"
                      src="images/img_image.png"
                      alt="image_Three"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-center justify-start w-[134px]">
                    <Text
                      className="text-base text-center text-gray-900 w-full"
                      size="txtInterMedium16Gray900"
                    >
                      {props?.username}
                    </Text>
                    <Text
                      className="text-blue_gray-600 text-center text-sm w-full"
                      size="txtInterRegular14"
                    >
                      {props?.designation}
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-6 w-full"
                  src="images/img_rating.svg"
                  alt="rating"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopTestimonial.defaultProps = {
  descriptiontext: (
    <>
      I had the pleasure of experiencing the next generation of card solutions
      with this incredible product. It&#39;s refreshing to see such innovation
      in the financial industry.
    </>
  ),
  username: "Nick Babich",
  designation: "Lead Designer",
};

export default DesktopTestimonial;
