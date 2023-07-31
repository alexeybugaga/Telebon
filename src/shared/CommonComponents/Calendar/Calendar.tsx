import React, { useState } from 'react';
import styles from './calendar.scss';

import CalendarBlock from 'react-calendar';
import { EIcons, Icon } from '../../icons';
import styled from 'styled-components';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


export function Calendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <CalendarContainer>
      <CalendarBlock 
          className={styles.calendarWrap} 
          nextLabel={<> <Icon name={EIcons.arrownext}/> </>}
          prevLabel={<> <Icon name={EIcons.arrowprev}/> </>}
          prevAriaLabel={'Предыдущий месяц'}
          nextAriaLabel={'Следующий месяц'}
          showNeighboringMonth={false}
          onClickDay={(val) => console.log(val)} 
          onChange={onChange} 
          value={value} 
      />
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  /* ... */

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    padding: 20px;
    display: flex;
    border-bottom: 2px solid rgba(41, 47, 81, 0.10);

    .react-calendar__navigation__label {
      display: flex;
      font-size: 14px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.14px;
      order: -1;
    }
    abbr {
      text-decoration: none;
      text-align: center;
    }
    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
        display:none;
    }
    .react-calendar__navigation__arrow {
    }
    .react-calendar__navigation__prev-button {
      margin-right: 12px;
    }
  }
  .react-calendar__viewContainer {
    padding: 20px;
    border-bottom: 2px solid rgba(41, 47, 81, 0.10);
    .react-calendar__month-view__weekdays {
      margin-bottom: 16px;
      abbr {
        font-size: 10px;
        font-weight: 600;
        line-height: 12px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
      }
    }
    .react-calendar__month-view__weekdays__weekday {
      display: flex;
      justify-content: center;
      padding: 4px 0;
    }
    .react-calendar__month-view__days {
      row-gap: 16px;
    }
    .react-calendar__month-view__days__day {
      display: flex;
      justify-content: center;
      font-size: 14px;
      line-height: normal;
      text-transform: uppercase;
      abbr {
        display: flex;
        justify-content: center;
        padding: 4px;
        width: 24px;
        border-radius: 50%;
        transition: all 0.4s ease;
      }
    }
    .react-calendar__tile--now {
      abbr {
        color: #fff;
        background-color: #496FFF;
      }
    } 
  }
`;

