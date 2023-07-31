import React, { useState } from 'react';
import { LoginLogo } from '../../icons';
import { Layout } from '../../Layout';
import { FormAutoriztion } from './FormAutoriztion';
import { FormRegistration } from './FormRegistration';
import styles from './login.scss';

export function Login() {
  const [isLogin, setLogin] = useState<string>('autorization');
  const handleClick = (state: string) => {
    setLogin(state);
  }
  return (
      <div className={styles.loginwrapper}>
        <div className={styles.loginlogo} >
          <LoginLogo />
        </div>
        {isLogin == 'autorization'
        ? <FormAutoriztion onClick={(isLogin) => handleClick(isLogin)} login={isLogin}/>
        : <FormRegistration onClick={(isLogin) => handleClick(isLogin)} login={isLogin}/>
      }
        
      </div>
        

  );
}

