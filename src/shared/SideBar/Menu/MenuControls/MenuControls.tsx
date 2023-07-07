import React from 'react';
import styles from './menucontrols.scss';

export function MenuControls() {
  return (
    <li>
      <button>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5681 2.24749L11.068 3.74749H3.75V14.2475H14.25V6.92947L15.75 5.42947V14.9975C15.75 15.4117 15.4142 15.7475 15 15.7475H3C2.58579 15.7475 2.25 15.4117 2.25 14.9975V2.99749C2.25 2.58328 2.58579 2.24749 3 2.24749H12.5681ZM15.364 1.57288L16.4246 2.63353L9.53032 9.52785L8.47155 9.52965L8.46968 8.4672L15.364 1.57288Z" fill="currentColor"/>
        </svg>
        <span>
          Управление
        </span>
      </button>
    </li>
  );
}
