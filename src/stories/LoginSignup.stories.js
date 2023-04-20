import React from "react";

import LoginSignup from "../components/LoginSignup/LoginSignup";

export default {
  title: "Components/LoginSignup",
  component: LoginSignup,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    retryHandler: { action: "retryHandler clicked" },
  },
};

const Template = (args) => <LoginSignup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "bg-red-500",
  textColor: "text-white",
  retryHandler: () => console.log("No internet handler"),
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  backgroundColor: "bg-gray-500",
  textColor: "text-black",
};
