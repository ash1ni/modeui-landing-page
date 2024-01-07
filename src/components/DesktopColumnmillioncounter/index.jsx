import React from "react";

import { List, Text } from "components";

const DesktopColumnmillioncounter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center sm:px-5 px-8 w-auto md:w-full">
          <div className="flex flex-col items-center justify-center w-auto md:w-full">
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-center p-4 w-auto">
                <div className="flex flex-col gap-4 items-center justify-center w-[248px]">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-purple-900 w-full"
                    size="txtManropeSemiBold48"
                  >
                    {props?.millioncounter}
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-[248px]">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      {props?.title}
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-600 text-center"
                      size="txtInterRegular16"
                    >
                      {props?.paratext}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-auto">
                <div className="flex flex-col gap-4 items-center justify-center w-[248px]">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-purple-900 w-full"
                    size="txtManropeSemiBold48"
                  >
                    {props?.number}
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-[248px]">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      {props?.title1}
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-600 text-center"
                      size="txtInterRegular16"
                    >
                      {props?.paratext1}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-auto">
                <div className="flex flex-col gap-4 items-center justify-center w-[248px]">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-purple-900 w-full"
                    size="txtManropeSemiBold48"
                  >
                    {props?.price}
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-[248px]">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      {props?.title2}
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-600 text-center"
                      size="txtInterRegular16"
                    >
                      {props?.paratext2}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-auto">
                <div className="flex flex-col gap-4 items-center justify-center w-[248px]">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-purple-900 w-full"
                    size="txtManropeSemiBold48"
                  >
                    {props?.number1}
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-[248px]">
                    <Text
                      className="text-base text-center text-gray-900 w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      {props?.title3}
                    </Text>
                    <Text
                      className="leading-[28.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-600 text-center"
                      size="txtInterRegular16"
                    >
                      {props?.paratext3}
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

DesktopColumnmillioncounter.defaultProps = {
  millioncounter: "2 Million",
  title: "Customers",
  paratext: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  number: "1K",
  title1: "Downloads",
  paratext1: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  price: "$73 Million",
  title2: "Transaction",
  paratext2: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  number1: "2.0",
  title3: "Latest Version",
  paratext3: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
};

export default DesktopColumnmillioncounter;
