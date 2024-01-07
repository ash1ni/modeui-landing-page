import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import DesktopCalltoaction from "components/DesktopCalltoaction";
import DesktopColumn from "components/DesktopColumn";
import DesktopColumnmillioncounter from "components/DesktopColumnmillioncounter";
import DesktopFeature from "components/DesktopFeature";
import DesktopFeature1 from "components/DesktopFeature1";
import DesktopLogocloud from "components/DesktopLogocloud";
import DesktopStackmesh from "components/DesktopStackmesh";
import DesktopTestimonial from "components/DesktopTestimonial";

const DesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <DesktopColumn className="bg-white-A700 border-b border-gray-200 border-solid flex flex-col gap-2 items-center justify-center max-w-[1440px] p-2 w-full" />
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col mx-auto w-full">
            <header className="bg-white-A700 border-b border-gray-200 border-solid flex items-center justify-center mx-auto md:px-10 px-20 sm:px-5 py-5 w-full">
              <div className="flex flex-col items-center justify-center sm:px-5 px-8 w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1216px] w-full">
                  <div className="flex flex-col items-start justify-center p-2 w-auto">
                    <Img
                      className="h-6 w-[100px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start p-2 w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Card access
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-2 w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Banking
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-2 w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Processing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-2 w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          About
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-2 w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Carrier
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start p-2 w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-base text-center text-gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Contact
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[103px]"
                        rightIcon={
                          <Img
                            className="h-5 mb-px ml-2"
                            src="images/img_arrowleft.svg"
                            alt="arrow_left"
                          />
                        }
                        shape="round"
                        color="gray_200_01"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-center">
                          Login
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <DesktopStackmesh className="md:h-[565px] h-[604px] mt-[-36px] mx-auto w-full z-[1]" />
          </div>
          <DesktopLogocloud className="bg-white-A700 flex flex-col gap-2 items-center justify-center max-w-[1440px] mt-[-36px] mx-auto md:px-10 px-20 sm:px-5 py-24 w-full z-[1]" />
        </div>
        <DesktopFeature className="bg-white-A700 flex flex-col gap-2 items-center justify-center max-w-[1440px] md:px-10 px-20 sm:px-5 py-24 w-full" />
        <DesktopFeature1 className="bg-white-A700 flex flex-col gap-2 items-center justify-center max-w-[1440px] md:px-10 px-20 sm:px-5 py-24 w-full" />
        <DesktopColumnmillioncounter className="bg-white-A700 flex flex-col font-manrope gap-2 items-center justify-center md:px-10 px-20 sm:px-5 py-24 w-auto md:w-full" />
        <DesktopTestimonial className="bg-white-A700 flex flex-col font-manrope gap-2 items-center justify-center max-w-[1440px] md:px-10 px-20 sm:px-5 py-24 w-full" />
        <DesktopCalltoaction className="bg-white-A700 flex flex-col font-manrope gap-2 items-center justify-center max-w-[1440px] md:px-10 px-20 sm:px-5 py-24 w-full" />
        <footer className="bg-white-A700 border-gray-200 border-solid border-t flex font-inter items-center justify-center pb-10 pt-24 px-20 md:px-5 w-full">
          <div className="flex flex-col items-center justify-center sm:px-5 px-8 w-auto md:w-full">
            <div className="flex flex-col md:gap-10 gap-24 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-center max-w-[1216px] w-full">
                    <div className="flex flex-col gap-4 items-center justify-center w-[512px] sm:w-full">
                      <Img
                        className="h-6 w-[84px]"
                        src="images/img_settings.svg"
                        alt="settings_Three"
                      />
                      <Text
                        className="leading-[28.00px] md:max-w-full max-w-lg text-base text-blue_gray-600 text-center"
                        size="txtInterMedium16Bluegray600"
                      >
                        Mode UI is a comprehensive design system that empowers
                        designers and developers to create cohesive and visually
                        stunning user interfaces across various platforms and
                        devices
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-50 h-px w-full" />
                </div>
                <div className="flex flex-col items-center justify-center max-w-[1216px] w-full">
                  <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900 w-full"
                        size="txtInterBold16"
                      >
                        Company
                      </Text>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            About us
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Pricing
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <a
                            href="javascript:"
                            className="text-base text-gray-800 w-auto"
                          >
                            <Text size="txtInterMedium16">Contact us</Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Features
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900 w-full"
                        size="txtInterBold16"
                      >
                        Product
                      </Text>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Figma design system
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Ios kit
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Android kit
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Wireframe
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900 w-full"
                        size="txtInterBold16"
                      >
                        Resources
                      </Text>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Templates
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Landing pages
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Documentation
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Comp library
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-900 w-full"
                        size="txtInterBold16"
                      >
                        Legal
                      </Text>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <a
                            href="javascript:"
                            className="text-base text-gray-800 w-auto"
                          >
                            <Text size="txtInterMedium16">Privacy policy</Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <a
                            href="javascript:"
                            className="text-base text-gray-800 w-auto"
                          >
                            <Text size="txtInterMedium16">
                              Terms & Conditions
                            </Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Disclaimer
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Affiliate programme
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-900 w-full"
                      >
                        <Text size="txtInterBold16">Support</Text>
                      </a>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Help centre
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Raise ticket
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Report
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Refund
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row gap-6 items-center justify-center w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_frame_blue_gray_600.svg"
                      alt="frame"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_social.svg"
                      alt="social"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_social_blue_gray_600.svg"
                      alt="social_One"
                    />
                  </div>
                </div>
                <Text
                  className="text-blue_gray-600 text-center text-sm w-auto"
                  size="txtInterRegular14"
                >
                  © 2023 Mode UI Inc. All Rights Reserved.
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesktopPage;
