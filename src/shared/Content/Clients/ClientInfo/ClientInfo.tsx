import React, { useState } from 'react';
import { EIcons, Icon } from '../../../icons';
import { Modal } from '../../Modal';
import styles from './clientinfo.scss';
import { ClientInfoEdit } from './ClientInfoEdit';

interface IClientInfoProps {
  id?: string;
  name?: string;
  phone?: string;
  type_client?: string;
  status?: string;
}


export function ClientInfo(props: IClientInfoProps) { 
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={styles.clientInfo}>
      <div className={styles.clientInfoHead}>
        <span className={styles.title}>
          Информация о клиенте
        </span>
      </div>
      <div className={styles.clientInfoContent}>
        <div className={styles.topInfo}>
          <div className={styles.topInfoName}>
            <span>{props?.name}</span>
            <span>-</span>
            <span>33 года</span>
          </div>

          <span className={styles.topInfoPhone}>{props?.phone} (Кировская обл.)</span>
        </div>
        <div className={styles.mainInfo}>
          <ul className={styles.mainInfoList}>
            <li>
              <span className={styles.label}>Источник:</span>
              <span className={styles.value}></span>
            </li>
            <li>
              <span className={styles.label}>Продукт:</span>
              <span className={styles.value}></span>
            </li>
            <li>
              <span className={styles.label}>Действия:</span>
              <span className={styles.value}></span>
            </li>
          </ul>
          <div className={styles.mainInfoBottom}>
            <button className={styles.button}>
              <span>
                Статус:
              </span>
              <span className={styles.buttonValue}>
                {props?.status}
              </span>
            </button>
            <button className={styles.button}>
              <Icon name={EIcons.history}/>
              <span>История клиента</span>
            </button>
            <div className={styles.loyalty}>
              <span>Лояльность</span>
              <div className={styles.lineWrap}>
                <span className={styles.line} style={{width: '100%'}}></span>
              </div>
              <span>100-100</span>
            </div>
            <div className={styles.documents}>
              <span>Документы</span>
              <div className={styles.lineWrap}>
                <span className={styles.line} style={{width: '70%'}}></span>
              </div>
              <span>7-10</span>
            </div>
            <button onClick={()=> setIsEdit(true)} className={styles.button}>
              <Icon name={EIcons.edit}/>
              <span>Редактировать</span>
              {isEdit && <Modal isActive={isEdit} onActive={setIsEdit}>
                <ClientInfoEdit {...props} />
                </Modal>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
