import { ReactElement } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.scss';

type LayoutTypes = {
  children: ReactElement;
};

export const Layout = ({ children }: LayoutTypes) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
};
