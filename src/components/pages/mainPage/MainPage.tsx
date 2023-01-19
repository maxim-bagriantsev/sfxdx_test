import React from 'react';
import styles from './MainPage.module.scss';

//ui
import { Content } from './Content/Content';

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Content />
    </div>
  );
};
