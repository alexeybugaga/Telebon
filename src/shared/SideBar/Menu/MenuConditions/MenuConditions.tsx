import React from 'react';
import styles from './menuconditions.scss';

export function MenuConditions() {
  return (
    <li>
      <button>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_156_488)">
            <path d="M9 16.5C4.85775 16.5 1.5 13.1423 1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5ZM9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15ZM8.25 5.25H9.75V6.75H8.25V5.25ZM8.25 8.25H9.75V12.75H8.25V8.25Z" fill="currentColor"/>
          </g>
          <defs>
          <clipPath id="clip0_156_488">
            <rect width="18" height="18" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <span>
          Условия & Положение
        </span>
      </button>
    </li>
  );
}
