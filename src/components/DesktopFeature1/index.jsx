import React from "react";

import { Img, Input, Text } from "components";

const DesktopFeature1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-7xl sm:px-5 px-8 w-full">
          <div className="flex flex-col md:gap-10 gap-24 items-center justify-center max-w-[1216px] w-full">
            <div className="flex flex-col items-center justify-center max-w-[1216px] w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-center justify-center max-w-[704px] w-full">
                  <Text
                    className="leading-[48.00px] max-w-[704px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
                    size="txtManropeSemiBold40"
                  >
                    {props?.titleTwo}
                  </Text>
                  <Text
                    className="leading-[28.00px] md:max-w-full max-w-xl text-blue_gray-600 text-center text-lg"
                    size="txtInterRegular18"
                  >
                    {props?.paratextOne}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-center rounded-lg w-auto">
                      <Text
                        className="text-base text-center text-purple-900 w-auto"
                        size="txtInterMedium16Purple900"
                      >
                        {props?.textOne}
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowright_purple_900.svg"
                        alt="arrowright_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1216px] w-full">
              <div className="bg-gray-50 flex md:flex-1 flex-col items-start justify-end pt-[33px] sm:px-5 px-[33px] rounded-lg w-[49%] md:w-full">
                <div className="h-[457px] md:h-[839px] ml-1.5 md:ml-[0] relative w-[89%] sm:w-full">
                  <Img
                    className="absolute bottom-[0] h-[839px] object-cover right-[0] w-[90%]"
                    src="images/img_scene32matte.png"
                    alt="scene32matte"
                  />
                  <div className="absolute md:h-[141px] h-[186px] left-[0] top-[0] w-[34%]">
                    <Img
                      className="absolute h-[55px] left-[0] object-cover top-[0]"
                      src="images/img_group12.png"
                      alt="groupTwelve"
                    />
                    <div className="absolute bottom-[0] h-[141px] right-[0] rotate-[36deg] w-[71%]">
                      <Img
                        className="h-[141px] m-auto object-cover rounded-lg w-full"
                        src="images/img_rectangle31.png"
                        alt="rectangleThirtyOne"
                      />
                      <div className="absolute bg-purple-900_01 bottom-[0] h-[43px] right-[0] rounded-bl-lg rounded-br-lg w-[34%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-center p-[76px] md:px-10 sm:px-5 rounded-lg w-[49%] md:w-full">
                <div className="h-[275px] md:h-[333px] my-[31px] relative w-full">
                  <div className="absolute bg-white-A700 border border-solid deep_purple_A100_7f_blue_gray_100_7f_border flex flex-col h-max inset-y-[0] items-center justify-center my-auto p-[25.97px] sm:px-5 right-[0] rounded-[12px] w-auto">
                    <div className="flex flex-col gap-[27.59px] items-start justify-start w-auto">
                      <div className="flex flex-row gap-[219.92px] items-start justify-start w-auto">
                        <div className="flex flex-col gap-[4.87px] items-start justify-start w-auto">
                          <Text
                            className="text-[19.48px] text-gray-900 w-auto"
                            size="txtManropeSemiBold1948"
                          >
                            {props?.spending}
                          </Text>
                          <Input
                            name="frame627"
                            placeholder="9349 visa card"
                            className="font-inter font-medium p-0 placeholder:text-blue_gray-600 text-[12.98px] text-blue_gray-600 text-left w-full"
                            wrapClassName="flex w-full"
                            prefix={
                              <Img
                                className="h-[19px] mr-1 my-auto"
                                src="images/img_frame.svg"
                                alt="Frame"
                              />
                            }
                          ></Input>
                        </div>
                        <Img
                          className="h-[19px] w-[19px]"
                          src="images/img_map.svg"
                          alt="map"
                        />
                      </div>
                      <div className="flex flex-col gap-[9.74px] items-start justify-center w-auto">
                        <div className="flex flex-row gap-[8.93px] items-center justify-start w-auto">
                          <Text
                            className="sm:text-[28.46px] md:text-[30.46px] text-[32.46px] text-gray-900 w-auto"
                            size="txtManropeMedium3246"
                          >
                            {props?.amounttext}
                          </Text>
                          <Text
                            className="text-[12.98px] text-gray-900 w-auto"
                            size="txtInterMedium1298"
                          >
                            {props?.usd}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[30.03px] items-start justify-start w-auto">
                          <Text
                            className="text-[12.98px] text-blue_gray-600 w-auto"
                            size="txtInterMedium1298Bluegray600"
                          >
                            {props?.vslastweektext}
                          </Text>
                          <Text
                            className="text-[12.98px] text-blue_gray-600 w-auto"
                            size="txtInterMedium1298Bluegray600"
                          >
                            {props?.lastpurchased}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5.68px] items-start justify-center w-auto">
                        <div className="flex flex-row items-center justify-start w-[90%] md:w-full">
                          <div className="flex flex-col items-start justify-start p-[6.49px] w-auto">
                            <Text
                              className="text-[12.98px] text-blue_gray-600 w-auto"
                              size="txtInterMedium1298Bluegray600"
                            >
                              {props?.usdcountertext}
                            </Text>
                          </div>
                          <Text
                            className="ml-[43px] text-[12.98px] text-blue_gray-600"
                            size="txtInterMedium1298Bluegray600"
                          >
                            {props?.usdcounterOne}
                          </Text>
                          <Text
                            className="ml-[78px] text-[12.98px] text-blue_gray-600"
                            size="txtInterMedium1298Bluegray600"
                          >
                            {props?.usdcounterTwo}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[3.25px] items-start justify-start w-auto">
                          <div className="bg-purple-900 h-3 rounded-bl-[12px] rounded-tl-[12px] w-[29%]"></div>
                          <div className="h-3 overflow-hidden relative w-[41%]">
                            <div className="w-full h-full absolute bg-purple_50"></div>
                            <div
                              className="h-full absolute bg-purple_900"
                              style={{ width: "55%" }}
                            ></div>
                          </div>
                          <div className="bg-purple-50 h-3 rotate-[180deg] rounded-bl-[12px] rounded-tl-[12px] w-[29%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[55px] left-[0] object-cover top-[0]"
                    src="images/img_group12.png"
                    alt="groupTwelve_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopFeature1.defaultProps = {
  titleTwo: "Elevating Card Programs with Cutting-Edge Technology",
  paratextOne:
    "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  textOne: "Compare all Pro features",
  spending: "Spending",
  amounttext: "127.14",
  usd: "USD",
  vslastweektext: "vs last week",
  lastpurchased: "Last Purchased ( Feb 24 19:59 UTC-5 )",
  usdcountertext: "400 USD",
  usdcounterOne: "1000 USD",
  usdcounterTwo: "5000 USD",
};

export default DesktopFeature1;
