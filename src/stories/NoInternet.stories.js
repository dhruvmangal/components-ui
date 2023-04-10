import React from 'react';

import NoInternet from '../components/popups/noInternet';

export default {
  title: 'Popups/NoInternet',
  component: NoInternet,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    retryHandler: { action: 'retryHandler clicked' },
  },
};

const Template = (args) => <NoInternet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: 'bg-red-500',
  textColor: 'text-white',
  retryHandler: () => console.log('No internet handler'),
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  backgroundColor: 'bg-gray-500',
  textColor: 'text-black',
};
