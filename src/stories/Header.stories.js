import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
    HeaderTabs: [
      { name: "Home", onClick: () => console.log("Tabs") },
      { name: "Company", onClick: () => console.log("Tabs") },
      { name: "Marketplace", onClick: () => console.log("Tabs") },
      { name: "Features", onClick: () => console.log("Tabs") },
      { name: "Team", onClick: () => console.log("Tabs") },
      { name: "Contact", onClick: () => console.log("Tabs") },
    ],
    // BGColor: "#000",
    // FontSize: "20px",
    // TextColor:"black"
    // HeaderLogo:"../assets/svg/...."
  },
};

export const LoggedOut = {
  args: {
    HeaderTabs: ["Home"],
  },
};
export const sub = {};
