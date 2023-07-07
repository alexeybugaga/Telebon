import React from 'react';
import styles from './menuanalytics.scss';

export function MenuAnalytics() {
  return (
    <li>
      <button>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.75 15.75V17.25H8.25V15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V4.5H16.5V15C16.5 15.4142 16.1642 15.75 15.75 15.75H9.75ZM3 14.25H15V6H3V14.25ZM9.75 7.5H13.5V9H9.75V7.5ZM9.75 10.5H13.5V12H9.75V10.5ZM6.75 7.5V9.75H9C9 10.9927 7.99267 12 6.75 12C5.50736 12 4.5 10.9927 4.5 9.75C4.5 8.50733 5.50736 7.5 6.75 7.5ZM1.5 2.25H16.5V3.75H1.5V2.25Z" fill="currentColor"/>
        </svg>
        <span>Аналитика</span>
      </button> 
    </li>
  );
}
