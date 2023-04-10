import React from 'react';
import { render } from 'react-dom';

interface Props {
  backgroundColor?: string;
  textColor?: string;
  retryHandler?: () => void;
}

const ECNoInternet: React.FC<any> = ({
  backgroundColor = 'bg-red-500',
  textColor = 'text-white',
  retryHandler,
}) => {
  const handleClick = () => {
    if (retryHandler) {
      retryHandler();
    } else {
      window.location.reload();
    }
  };
  // return(<>Hell M F</>);

  return (
    <div className="flex flex-col justify-center items-center h-screen "
    style={{
      background:backgroundColor,
      color:textColor
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-16 w-16  mb-6`}
        style={{color:textColor}}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 0a9.98 9.98 0 00-7.071 2.929A9.98 9.98 0 000 10a9.98 9.98 0 002.929 7.071A9.98 9.98 0 0010 20a9.98 9.98 0 007.071-2.929A9.98 9.98 0 0020 10a9.98 9.98 0 00-2.929-7.071A9.98 9.98 0 0010 0zm0 18a8 8 0 110-16 8 8 0 010 16z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M10.353 12.354a.5.5 0 00.707 0l3.5-3.5a.5.5 0 10-.707-.707L10.5 10.293v-8.586a.5.5 0 00-1 0v8.586L7.854 8.147a.5.5 0 10-.707.707l3.5 3.5z"
          clipRule="evenodd"
        />
      </svg>
      <h1 className={`text-3xl font-bold mb-4 `}>No Internet Connection</h1>
      <p className={`text-lg  text-center mb-6`}>
        Please check your connection and try again.
      </p>
      {retryHandler && (
        <button
          className={`px-6 py-3 bg-white text-red-500 font-semibold rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out `}
          style={{color:textColor}}
          onClick={handleClick}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ECNoInternet;