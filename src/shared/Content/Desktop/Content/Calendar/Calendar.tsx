import React from 'react';
import styles from './calendar.scss';

export function Calendar() {
  return (
    <div className={styles.calendar}>
      <div className={styles.top}>
        <div className={styles.titlewrap}>
          <span className={styles.month}>
            Январь 2023
          </span>
          <div className={styles.btnwrap}>
            <button>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1831 4.175L6.35811 8L10.1831 11.825L8.99977 13L3.99977 8L8.99977 3L10.1831 4.175Z" fill="currentColor"/>
              </svg>
            </button>
            <button className={styles.next}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1831 4.175L6.35811 8L10.1831 11.825L8.99977 13L3.99977 8L8.99977 3L10.1831 4.175Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.days}>
          <ul className={styles.grid}>
            <li className={styles.weekday}>Пн</li>
            <li className={styles.weekday}>Вт</li>
            <li className={styles.weekday}>Ср</li>
            <li className={styles.weekday}>Чт</li>
            <li className={styles.weekday}>Пт</li>
            <li className={styles.weekday}>Сб</li>
            <li className={styles.weekday}>Вс</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.titlewrap}>
          <span className={styles.titledata}>Показатели</span>
          <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1831 4.175L6.35811 8L10.1831 11.825L8.99977 13L3.99977 8L8.99977 3L10.1831 4.175Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <ul className={styles.data}>
          <li>
            <span className={styles.title}>
              Кол-во попыток
            </span>
            <span className={styles.linedata}>

            </span>
            <span className={styles.label}>
              100 - 100
            </span>
          </li>
          <li>
            <span className={styles.title}>
              Запись
            </span>
            <span className={`${styles.linedata} ${styles.part}`}>

            </span>
            <span className={styles.label}>
              7-10
            </span>
          </li>
          <li>
            <span className={styles.title}>
              Конверсия
            </span>
            <span className={styles.linedata}>
            </span>
            <span className={styles.label}>
              100%
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
