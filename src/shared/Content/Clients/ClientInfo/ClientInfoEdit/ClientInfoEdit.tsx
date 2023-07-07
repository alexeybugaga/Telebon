import React from 'react';
import { EIcons, Icon } from '../../../../icons';
import styles from './clientinfoedit.scss';

interface IClientInfoEditProps {
  id?: string;
  name?: string;
  phone?: string;
  type_client?: string;
  status?: string;
}


export function ClientInfoEdit(props: IClientInfoEditProps) {

  
  return (
    <div className={styles.clientInfoEdit}>
      <h3>
        <span>{props?.id}</span>
        <span>-</span>
        <span>{props?.name}</span>
      </h3>
      <div className={styles.breadcrumbs}>
        <span className={styles.first}>{props.status}</span>
        <span className={styles.arrow}>
          <Icon name={EIcons.arrow}/>
        </span>
        <span className={styles.second}>Запись</span>
      </div>
      <div className={styles.content}>
        <div className={styles.contentTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.left}>Раздел 1</th>
                <th>Раздел 2</th>
                <th>Раздел 3</th>
                <th>Раздел 4</th>
              </tr>
            </thead>
          </table>
        </div>
        
        <div className={styles.contentRight}>
          <ul className={styles.contentRightList}>
            <li className={styles.commonInfo}>
              <span className={styles.top}>
              Договор: №2345 
              <br /> 
              Тариф: 1 ст, стандарт
              </span>
              <div className={styles.bottom}>
                <span className={styles.lineWrap}>
                  <span className={styles.line} style={{width: '78%'}}>

                  </span>
                </span>
                <span className={styles.balanse}>
                  Баланс: 0 руб
                </span>
              </div>
            </li>
            <li>
              <button className={styles.button}>
                <Icon name={EIcons.commondata}/>
                <span>
                  Общие данные
                </span>
              </button>
            </li>
            <li>
              <button className={styles.button}>
                <Icon name={EIcons.history}/>
                <span>
                  История клиента
                </span>
              </button>
            </li>
            <li>
              <button className={styles.button}>
                <Icon name={EIcons.documents}/>
                <span>
                  Документы
                </span>
              </button>
            </li>
            <li>
              <button className={styles.button}>
                <Icon name={EIcons.planning}/>
                <span>
                  Планирование
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
