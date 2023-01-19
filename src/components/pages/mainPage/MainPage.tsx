import React from 'react';
import styles from './MainPage.module.scss';

//ui
import { Content } from './Content/Content';
import ModuleSky from "../../ui/sky/ModuleSky";

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
        <ModuleSky />
      <Content />
    </div>
  );
};
