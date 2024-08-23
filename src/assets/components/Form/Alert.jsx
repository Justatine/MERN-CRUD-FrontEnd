import React from 'react';

const colorClasses = {
  green: 'text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800',
  red: 'text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800',
};

const Alert = ({ code = 'green', message }) => {
  const classes = colorClasses[code] || colorClasses['green']; 

  return (
    <div
      id="alert-border-1"
      className={`flex items-center p-4 mb-4 border-l-4 ${classes}`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-label="Alert Icon"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <div className="ms-3 text-sm font-medium">
        {message}
      </div>
    </div>
  );
}

export default Alert;