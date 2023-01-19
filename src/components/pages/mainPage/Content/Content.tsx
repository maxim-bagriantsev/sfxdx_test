import React from 'react';
import styles from './Content.module.scss';
import {Wallet} from "../../../Chain/Wallet/Wallet";

//ui

export const Content = () => {

  return (
    <div className={styles.content}>
        <Wallet/>
    </div>
  );
};
