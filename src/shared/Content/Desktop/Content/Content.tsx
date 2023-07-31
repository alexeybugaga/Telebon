import classNames from 'classnames';
import React, { useState } from 'react';
import { Calendar } from '../../../CommonComponents/Calendar';
import styles from './content.scss';
import { EventRibbon } from './EventRibbon';
import { Main } from './Main';
import { SideBlock } from './SideBlock';

export function Content() {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  }
  return (
    <div className={styles.contentWrap}>
      <div className={styles.tabs}>
        <ul className={styles.tabsBtns}>
          <li>
            <button className={ toggleState === 1 ? classNames(styles.active): ''} onClick={() => toggleTab(1)}>
              Текущие задачи
            </button>
          </li>
          <li>
            <button className={ toggleState === 2 ? classNames(styles.active): ''} onClick={() => toggleTab(2)}>
              Лента событий
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <Main toggle={toggleState}/>
        <EventRibbon toggle={toggleState}/>
        <SideBlock />
      </div>
    </div>
  );
}
