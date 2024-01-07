import React from "react";

import { Button, Img, List, Text } from "components";

const DesktopFeature = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-7xl sm:px-5 px-8 w-full">
          <div className="flex flex-col md:gap-10 gap-24 items-center justify-center max-w-[1216px] w-full">
            <div className="flex flex-col items-center justify-center max-w-[1216px] w-full">
              <div className="flex flex-col gap-8 items-center justify-start max-w-[704px] w-full">
                <div className="flex flex-col gap-4 items-center justify-center max-w-[704px] w-full">
                  <Text
                    className="leading-[48.00px] max-w-[704px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
                    size="txtManropeSemiBold40"
                  >
                    {props?.titleOne}
                  </Text>
                  <Text
                    className="leading-[28.00px] md:max-w-full max-w-xl text-blue_gray-600 text-center text-lg"
                    size="txtInterRegular18"
                  >
                    {props?.paratext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-center rounded-lg w-auto">
                      <Text
                        className="text-base text-center text-purple-900 w-auto"
                        size="txtInterMedium16Purple900"
                      >
                        {props?.text}
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowright_purple_900.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-center p-4 w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Button
                    className="flex h-14 items-center justify-center w-14"
                    shape="circle"
                    color="gray_100"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </Button>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      {props?.heading}
                    </Text>
                    <Text
                      className="leading-[24.00px] md:max-w-full max-w-xs text-blue_gray-600 text-center text-sm"
                      size="txtInterMedium14Bluegray600"
                    >
                      {props?.language}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Button
                    className="flex h-14 items-center justify-center w-14"
                    shape="circle"
                    color="gray_100"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </Button>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      {props?.heading1}
                    </Text>
                    <Text
                      className="leading-[24.00px] md:max-w-full max-w-xs text-blue_gray-600 text-center text-sm"
                      size="txtInterMedium14Bluegray600"
                    >
                      {props?.language1}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Button
                    className="flex h-14 items-center justify-center w-14"
                    shape="circle"
                    color="gray_100"
                    size="lg"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_lock.svg" alt="lock" />
                  </Button>
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      {props?.heading2}
                    </Text>
                    <Text
                      className="leading-[24.00px] md:max-w-full max-w-xs text-blue_gray-600 text-center text-sm"
                      size="txtInterMedium14Bluegray600"
                    >
                      {props?.language2}
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopFeature.defaultProps = {
  titleOne: "Elevating Card Programs with Cutting-Edge Technology",
  paratext:
    "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  text: "Compare all Pro features",
  heading: "Globally Accepted",
  language:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
  heading1: "Biometric Integrated",
  language1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
  heading2: "Fully Secured",
  language2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
};

export default DesktopFeature;
