import React, { useState } from 'react';
import { Content } from '../../Content';
import { Call } from '../../Content/Call';
import { Clients } from '../../Content/Clients';
import { Desktop } from '../../Content/Desktop';
import { Header } from '../../Content/Header';
import { Messenger } from '../../Content/Messenger';
import { TaskManager } from '../../Content/TaskManager';
import { Layout } from '../../Layout';
import { SideBar } from '../../SideBar';
import styles from './home.scss';

export function Home() {
  return (
    <Layout>
        <SideBar />
        <Content>
            <Header />
            <Desktop />
            <Call />
            <Messenger />
            <TaskManager />
            <Clients />
        </Content>
    </Layout>
  );
}
