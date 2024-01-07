import React from "react";

import { Button, Img, Text } from "components";

const DesktopStackmesh = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[460px] m-auto"
          src="images/img_mesh.svg"
          alt="mesh"
        />
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pb-8 pt-32 md:px-10 px-20 sm:px-5 w-auto md:w-full">
          <div className="flex flex-col items-center justify-center max-w-7xl sm:px-5 px-8 w-full">
            <div className="flex flex-col items-center justify-center max-w-[1216px] w-full">
              <div className="flex flex-col gap-8 items-start justify-start max-w-[832px] w-full">
                <div className="flex flex-col gap-4 items-center justify-start max-w-[832px] w-full">
                  <Text
                    className="text-base text-center text-purple-900 w-auto"
                    size="txtInterMedium16Purple900"
                  >
                    {props?.subheadingtext}
                  </Text>
                  <div className="flex flex-col gap-4 items-center justify-start max-w-[832px] w-full">
                    <Text
                      className="leading-[72.00px] max-w-[832px] md:max-w-full md:text-5xl text-[62px] text-center text-gray-900"
                      size="txtManropeSemiBold62"
                    >
                      {props?.titletext}
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[648px] md:max-w-full text-blue_gray-600 text-center text-lg"
                      size="txtInterRegular18"
                    >
                      {props?.descriptiontext}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-center max-w-[832px] w-full">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[193px]"
                        rightIcon={
                          <Img
                            className="h-5 mb-px ml-2"
                            src="images/img_arrowright.svg"
                            alt="arrow_right"
                          />
                        }
                        shape="round"
                        color="purple_900"
                        size="lg"
                        variant="fill"
                      >
                        <div className="!text-white-A700 font-inter font-medium text-base text-center">
                          {props?.unlockbutton}
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="text-blue_gray-600 text-center text-sm w-auto"
                    size="txtInterMedium14Bluegray600"
                  >
                    {props?.nocreditcardtext}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopStackmesh.defaultProps = {
  subheadingtext: "Seamless experience",
  titletext: "Unleashing the Next Generation of Card Solutions",
  descriptiontext:
    "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  unlockbutton: "Unlock your Card",
  nocreditcardtext: "*No credit card required",
};

export default DesktopStackmesh;
