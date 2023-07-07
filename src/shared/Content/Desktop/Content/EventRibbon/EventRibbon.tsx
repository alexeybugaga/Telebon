import classNames from 'classnames';
import React from 'react';
import { slowTestThreshold } from '../../../../../../jest.config';
import { UserIcon } from '../../../../icons';
import styles from './eventribbon.scss';

interface IEventRibbonProps {
  toggle: number;

}

export function EventRibbon({ toggle }: IEventRibbonProps) {
  return (
    <div className={toggle == 2 ? classNames(styles.eventRibbon, styles.active) : classNames(styles.eventRibbon)}>
      <ul className={styles.eventRibbon__list}>
        <li className={styles.eventRibbon__item}>
          <div className={styles.eventRibbon__itemHeading}>
            Сегодня
          </div>
          <div className={styles.eventRibbon__itemInfo}>
            <ul className={styles.eventRibbon__itemInfoList}>
              <li className={styles.eventRibbon__itemInfoRecord}>
                <span className={styles.icon}>
                  <UserIcon />
                </span>
                <div className={styles.record}>
                  <span className={styles.recordInfo}>
                    Оформление Иванова И.В. на 04.12.2023, 14:00 “Пробное занятие”
                  </span>
                  <span className={styles.time}>
                    Запись 12:03
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
