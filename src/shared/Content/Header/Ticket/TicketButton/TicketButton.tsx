import React from 'react';
import styles from './ticketbutton.scss';


interface ITicketButtonProps {
  onClick: (isActive: any) => void;
}
const noop = () => {};

export function TicketButton( { onClick = noop }: ITicketButtonProps) {
  return (
    <button className={styles.ticketButton} onClick={ onClick }>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_156_478)">
          <path d="M15 12.75H16.5V14.25H1.5V12.75H3V7.5C3 5.9087 3.63214 4.38258 4.75736 3.25736C5.88258 2.13214 7.4087 1.5 9 1.5C10.5913 1.5 12.1174 2.13214 13.2426 3.25736C14.3679 4.38258 15 5.9087 15 7.5V12.75ZM13.5 12.75V7.5C13.5 6.30653 13.0259 5.16193 12.182 4.31802C11.3381 3.47411 10.1935 3 9 3C7.80653 3 6.66193 3.47411 5.81802 4.31802C4.97411 5.16193 4.5 6.30653 4.5 7.5V12.75H13.5ZM6.75 15.75H11.25V17.25H6.75V15.75Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_156_478">
            <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      <span className={styles.ticketText}>Тикет</span>
      <span className={styles.ticketCount}>12</span>
    </button>
  );
}
