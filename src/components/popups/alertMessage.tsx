import React from "react";

interface AlertProps {
  backDropColor: string;
  backgroundColor: string;
  boxHeight: string;
  minWidth: string;
  textColor: string;
  message: string;
  messageTextSize: string;
  heading: string;
  headingTextSize: string;
  displayTopIcon: Boolean;
  image: string;
  imageWidth: string;
  imageHeight: string;
  displayOkButton: Boolean;
  okButtonText: string;
  displayCancelButton: Boolean;
  cancelButtonText: string;
  boxShadow:string;
  onClose?: () => void;
  onOk?: () => void;
}

const ECAlertMessage: React.FC<AlertProps> = ({
  backDropColor = "#010101",
  backgroundColor = "#868686",
  boxHeight = "auto",
  minWidth,
  textColor = "#fff",
  message = "This is an alert message!",
  messageTextSize,
  heading = "Oops",
  headingTextSize = "",
  displayTopIcon = true,
  image,
  imageWidth = "auto",
  imageHeight = "auto",
  displayOkButton = false,
  okButtonText = 'Ok',
  displayCancelButton = false,
  cancelButtonText= 'Cancel',
  boxShadow,
  onClose,
  onOk,
}) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 bg-gray-800"
      style={{
        backgroundColor: backDropColor,
      }}
    >
      <div
        className={`rounded-md flex flex-col text-center  justify-between relative max-w-md p-10`}
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          height: boxHeight,
          minWidth: minWidth,
          boxShadow:boxShadow
        }}
      >
        <h1
          className="m-0"
          style={{
            fontSize: headingTextSize,
          }}
        >
          {heading}
        </h1>
        {image && <img className="m-10" src={image} width={imageWidth} height={imageHeight} />}
        <p
          style={{
            fontSize: messageTextSize,
          }}
        >
          {message}
        </p>
        {displayTopIcon && (
          <button
            className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-900"
            onClick={onClose}
          >
            {}
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="x-circle w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5a1 1 0 012 0v4a1 1 0 01-2 0zm1 4a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        <div className="flex justify-between m-10">
            {displayOkButton && <button onClick={onOk}>{okButtonText}</button> }
            { displayCancelButton && <button onClick={onClose}>{cancelButtonText}</button> }
        </div>
      </div>
    </div>
  );
};

export default ECAlertMessage;
