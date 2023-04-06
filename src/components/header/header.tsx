/** @format */

import * as React from "react";
const logo = require("../../assets/svg/homeLogo.svg") as string;

const ECHeader: React.FC<any> = (props) => {
  const [mobile, setMobile] = React.useState(false);
  const tabs = props.HeaderTabs || [];

  let styleObj = {
    BGColor: props.BGColor || "Teal",
    FontSize: props.FontSize || "14px",
    TextColor: props?.TextColor || "white",
    HeaderLogo: props?.HeaderLogo || logo,
  };
  console.log("styleObj", styleObj);
  return (
    <header>
      <nav
        className={`flex items-center justify-between flex-wrap  p-6`}
        style={{ backgroundColor: `${styleObj.BGColor}` }}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div>
            <img src={styleObj.HeaderLogo} className="h-12" alt="LOGO" />
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setMobile(!mobile)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full  flex-grow lg:flex lg:items-center lg:w-auto ${
            mobile ? "block" : "hidden"
          }`}
        >
          <div
            className={`flex-grow`}
            style={{ fontSize: `${styleObj.FontSize}` }}
          >
            {tabs.map((tab: any, index: number) => (
              <p
                onClick={tab?.onClick}
                key={index}
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
                style={{ color: `${styleObj.TextColor}` }}
              >
                {tab?.name}
              </p>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ECHeader;
