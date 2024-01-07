import React from "react";

import { Button, Text } from "components";

const DesktopColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
          <div className="flex flex-col items-center justify-start max-w-[1216px] w-full">
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
              <Button
                className="!text-gray-800 border border-gray-200 border-solid cursor-pointer font-inter font-medium min-w-[104px] rounded-[12px] text-center text-xs"
                color="blue_gray_50"
                size="xs"
                variant="fill"
              >
                {props?.announcementbutton}
              </Button>
              <Text
                className="text-center text-gray-900 text-sm w-auto"
                size="txtInterMedium14"
              >
                {props?.announcementtext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopColumn.defaultProps = {
  announcementbutton: "Announcement",
  announcementtext:
    "We are happy to announce that we raise $2 Million in Seed Funding",
};

export default DesktopColumn;
