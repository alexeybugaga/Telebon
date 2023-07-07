import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './formautoriztion.scss';
import { Button } from '../Button';
import { EmailIcon, PasswordIcon } from '../../../icons';

interface IFormAutoriztionProps {
  login: string;
  onClick?: (login: any) => void;
}


export function FormAutoriztion( { onClick = (login:string) => {}, login }: IFormAutoriztionProps ) {
  return (
<div>
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
        <Form className={styles.formautorization}>
          <div className={styles.inputwrapper}>
            <Field type="email" name="email" placeholder="Email"/>
            <label htmlFor="email">Email</label>
            <span className={styles.inputIcon}>
              <EmailIcon />
            </span>
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={styles.inputwrapper}>
            <Field type="password" name="password" placeholder="Пароль" />
            <label htmlFor="password">Пароль</label>
            <span className={styles.inputIcon}>
              <PasswordIcon />
            </span>
            <ErrorMessage name="password" component="div" />
          </div>
          <div className={styles.bottomwrapper}>
            <label className={styles.bottomwrapperlabel}>
              <Field className={styles.inputcheckbox} type="checkbox" name="checked" value="One" />
              Запомнить меня
            </label>
            <a className={styles.forgotpasslink} href="#"> Забыл пароль</a>
          </div>
          <Button className={styles.autorizationBtn} disabled={isSubmitting}>
            <span>Авторизоваться</span>
          </Button>
          <Button type='button' className={styles.registrationBtn} disabled={false} onClick={() => onClick('registration') }>
            <span>Нет аккаунта?</span>
            <span className={styles.registrationText}>Зарегистрироваться</span>
          </Button>
        </Form>
       )}
    </Formik>
  </div>
  );
}
