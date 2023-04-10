import React from 'react';

import ECAlertMessage from '../components/popups/alertMessage';
export default {
    title: 'Components/ECAlertMessage',
    component: ECAlertMessage,
    argTypes: {
      backgroundColor: { control: 'color' },
      textColor: { control: 'color' },
    },
};
  
const Template = (args) => <ECAlertMessage {...args} />;
  
export const Default = Template.bind({});
  Default.args = {
    backDropColor : "#010101",
    backgroundColor : "#868686",
    boxHeight : "auto",
    minWidth:'',
    textColor : "#fff",
    message : "This is an alert message!",
    messageTextSize:'',
    heading : "Oops",
    headingTextSize : "",
    displayTopIcon : true,
    image:'',
    imageWidth : "auto",
    imageHeight : "auto",
    displayOkButton : false,
    okButtonText:'',
    displayCancelButton : false,
    cancelButtonText:'',
    boxShadow:'',
    onClose:()=>console.log('clicked close'),
    onOk:()=>console.log('clicked ok')
    
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  backgroundColor: 'bg-gray-500',
  textColor: 'text-black',
};
