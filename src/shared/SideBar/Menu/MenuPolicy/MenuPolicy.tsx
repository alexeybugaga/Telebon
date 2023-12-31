import React from 'react';
import styles from './menupolicy.scss';

export function MenuPolicy() {
  return (
    <li>
      <button>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_156_493)">
            <path d="M11.25 3H3.75V15H14.25V6H11.25V3ZM2.25 2.244C2.25 1.833 2.58525 1.5 2.99925 1.5H12L15.75 5.25V15.7448C15.7507 15.8432 15.732 15.9409 15.6949 16.0322C15.6579 16.1234 15.6032 16.2065 15.534 16.2766C15.4649 16.3468 15.3826 16.4026 15.2919 16.4409C15.2011 16.4792 15.1037 16.4993 15.0052 16.5H2.99475C2.79778 16.4986 2.60926 16.4198 2.46991 16.2806C2.33056 16.1414 2.25157 15.953 2.25 15.756V2.244ZM8.25 11.25H9.75V12.75H8.25V11.25ZM8.25 5.25H9.75V9.75H8.25V5.25Z" fill="currentColor"/>
          </g>
          <defs>
          <clipPath id="clip0_156_493">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <span>Политика конфиденциальности</span>
      </button> 
    </li>
  );
}
