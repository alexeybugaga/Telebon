import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '../../icons';
import styles from './modal.scss';

interface IModalProps {
  isActive: boolean;
  onActive: (isActive: boolean) => void;
  children?: React.ReactNode;
  isTicket?: boolean;
}

export function Modal( { isActive, onActive, children, isTicket=false }: IModalProps ) {

  if (typeof document == 'undefined') return null;

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={isActive ? classNames(styles.modal, styles.active) : classNames(styles.modal)} onClick={() => onActive(false)}>
      <div className={
        isTicket 
        ? classNames(styles.modalContent, styles.ticket) 
        : classNames(styles.modalContent)
        } onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={() => onActive(false)}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>), 
    node
  );
}
