import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { EIcons, Icon } from '../../../../icons';
import styles from './formaddclient.scss';

interface IFormAddClientProps {
  onActive: () => void;
}

export function FormAddClient({ onActive = () => {}}: IFormAddClientProps) {
  return (
    <div className={styles.formAddClient}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors: any = {};
            if (!values.email) {
              // errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Неверный email адрес';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
        {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formInputs}>
                <div className={styles.inputwrapper}>
                  <Field type="text" name="surname" placeholder="Фамилия..."/>
                  <label htmlFor="surname">Фамилия</label>
                  <ErrorMessage name="surname" component="div" />
                </div>
                <div className={styles.inputwrapper}>
                  <Field type="text" name="username" placeholder="Имя..."/>
                  <label htmlFor="username">Имя</label>
                  <ErrorMessage name="username" component="div" />
                </div>
                <div className={styles.inputwrapper}>
                  <Field type="text" name="patronymic" placeholder="Отчество..." />
                  <label htmlFor="patronymic">Отчество</label>
                  <ErrorMessage name="patronymic" component="div" />
                </div>
                <div className={styles.inputwrapper}>
                  <Field type="date" name="date" placeholder="Дата рождения..." />
                  <label htmlFor="date">Дата рождения</label>
                  <ErrorMessage name="date" component="div" />
                </div>
                <div className={styles.inputwrapper}>
                  <Field type="tel" name="phone" placeholder="Основной телефон..." />
                  <label htmlFor="phone">Основной телефон</label>
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div className={styles.inputwrapper}>
                  <Field type="email" name="email" placeholder="Email..." />
                  <label htmlFor="email">email</label>
                  <ErrorMessage name="v" component="div" />
                </div>
                <div className={styles.inputwrapper}>
                  <Field type="text" name="typeclient" placeholder="Тип клиента..." />
                  <label htmlFor="typeclient">Тип клиента</label>
                  <ErrorMessage name="typeclient" component="div" />
                </div>
                <div className={styles.inputwrapper}>
                  <Field type="text" name="source" placeholder="Источник..." />
                  <label htmlFor="source">Источник</label>
                  <ErrorMessage name="source" component="div" />
                </div>
              </div>
              <div className={styles.btnsWrap}>
                <button type="submit" className={styles.btn}> 
                  <Icon name={EIcons.savemove}/>
                  <span>
                    Сохранить и перейти 
                  </span>
                </button>
                <button type="submit" className={styles.btn}> 
                  <Icon name={EIcons.addplus}/>
                  <span>
                    Сохранить 
                  </span>
                </button>
                <button type="button" onClick={onActive} className={classNames(styles.btn, styles.cancel)}> 
                  <Icon name={EIcons.addplus}/>
                  <span>
                    Отмена 
                  </span>
                </button>
              </div>

            </Form>
           )}
        </Formik>
      </div>
    
  );
}
