import React from "react";

import { Button, Img, Text } from "components";

const DesktopCalltoaction = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-7xl sm:px-5 px-8 w-full">
          <div className="flex flex-col gap-8 items-center justify-start max-w-[1216px] w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <Text
                className="leading-[48.00px] max-w-[704px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
                size="txtManropeSemiBold40"
              >
                {props?.title}
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[190px]"
                  rightIcon={
                    <Img
                      className="h-5 mb-px ml-2"
                      src="images/img_creditcard.svg"
                      alt="credit-card"
                    />
                  }
                  shape="round"
                  color="purple_900"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-inter font-medium text-base text-center">
                    {props?.unlockbutton}
                  </div>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center w-auto">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[200px]"
                  rightIcon={
                    <Img
                      className="h-5 mb-px ml-2"
                      src="images/img_headphones.svg"
                      alt="headphones"
                    />
                  }
                  shape="round"
                  color="gray_200_01"
                  size="md"
                  variant="fill"
                >
                  <div className="font-inter font-medium text-base text-center">
                    {props?.supportbutton}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopCalltoaction.defaultProps = {
  title: "Unlock Limitless Possibilities with Our New Card Solutions",
  unlockbutton: "Unlock your card",
  supportbutton: "Customer support",
};

export default DesktopCalltoaction;
