import React from 'react';
import styles from './title.scss';

export function Title() {
  return (
    <div className={styles.titleWrap}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_246_968)">
          <path d="M29.4666 12.75H17.0001V24.0833H15.5834V29.7501H7.08342C6.30102 29.7501 5.66675 29.1159 5.66675 28.3335V15.5835H1.41675L16.0471 2.28311C16.5874 1.7919 17.4128 1.7919 17.9531 2.28311L29.4666 12.75ZM19.8334 15.5833H32.5834V25.5H19.8334V15.5833ZM18.4167 29.75H34.0001V26.9167H18.4167V29.75Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_246_968">
            <rect width="34" height="34" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <h2 className={styles.title}>
        Рабочий стол
      </h2>
    </div>
  );
}
