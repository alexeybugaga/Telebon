import React, { useState } from 'react';
import { Modal } from '../Modal';
import styles from './header.scss';
import { RunCommand } from './RunCommand';
import { Ticket } from './Ticket';
import { TicketButton } from './Ticket/TicketButton';
import { TicketModal } from './Ticket/TicketModal';
import { UserInfo } from './UserInfo';



export function Header() {
  return (
    <header className={styles.header}>
      <Ticket />
      <RunCommand />
      <UserInfo />
    </header>
  );
}
