import React, { useState } from 'react';
import { Modal } from '../../Modal';
import styles from './ticket.scss';
import { TicketButton } from './TicketButton';
import { TicketModal } from './TicketModal';



export function Ticket( ) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.ticket}>
        <TicketButton onClick={() => setModalActive(true)} />
        {modalActive && 
        <Modal isActive={modalActive} onActive={setModalActive} isTicket={true}>
          <TicketModal />
        </Modal>}
        
    </div>
  );
}
