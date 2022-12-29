import React from 'react'

export const Number3 = () => {
  return (
    <div className="flex justify-center">
      <svg
        className="h-8 w-8 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <line x1="8" y1="5" x2="8" y2="19" />{" "}
        <line x1="12" y1="5" x2="12" y2="19" />{" "}
        <line x1="16" y1="5" x2="16" y2="19" />
      </svg>
    </div>
  );
}
