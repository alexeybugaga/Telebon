import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { EmailIcon, PasswordIcon, UserIcon, UserRegistrationIcon } from '../../../icons';
import { Button } from '../Button';
import styles from './formregistration.scss';

interface IFormRegistrationProps {
  login: string;
  onClick?: (login: string) => void;
}

export function FormRegistration( { onClick = (login) => {}, login}: IFormRegistrationProps) {
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
        <Form className={styles.formregistration}>
          <div className={styles.inputwrapper}>
            <Field type="text" name="username" placeholder="Ваше ФИО"/>
            <label htmlFor="username">Ваше ФИО</label>
            <span className={styles.inputIcon}>
              <UserRegistrationIcon />
            </span>
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={styles.inputwrapper}>
            <Field type="email" name="email" placeholder="Email"/>
            <label htmlFor="email">Email</label>
            <span className={styles.inputIcon}>
              <EmailIcon />
            </span>
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={styles.inputwrapper}>
            <Field type="password" name="password-1" placeholder="Пароль" />
            <label htmlFor="password-1">Пароль</label>
            <span className={styles.inputIcon}>
              <PasswordIcon />
            </span>
            <ErrorMessage name="password-1" component="div" />
          </div>
          <div className={styles.inputwrapper}>
            <Field type="password" name="password-2" placeholder="Подтверждение пароля" />
            <label htmlFor="password-2">Подтверждение пароля</label>
            <span className={styles.inputIcon}>
              <PasswordIcon />
            </span>
            <ErrorMessage name="password-2" component="div" />
          </div>
          <div className={styles.bottomwrapper}>
            <label className={styles.bottomwrapperlabel}>
              <Field className={styles.inputcheckbox} type="checkbox" name="checked" value="One" />
              Запомнить меня
            </label>
            <a className={styles.forgotpasslink} href="#"> Забыл пароль</a>
          </div>
          <Button className={styles.registrationBtn} disabled={isSubmitting}>
            <span>Зарегистрироваться</span>
          </Button>
          <Button type='button' className={styles.autorizationBtn} disabled={false} onClick={() => onClick('autorization')}>
            <span>Есть аккаунт?</span>
            <span className={styles.autorizationText}>Авторизоваться</span>
          </Button>
        </Form>
       )}
    </Formik>
  </div>
  );
}
