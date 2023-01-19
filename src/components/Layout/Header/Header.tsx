import {useNavigate} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {frontendRoutes} from '../../../utils/router/routes';

//  ui
import {IconLogo} from '../../ui/Icons/IconLogo'
import {Button} from "../../ui/Button";

const cx = classNames.bind(styles);

export const Header = () => {
    const navigate = useNavigate();


    return (
        <div className={cx('header')}>
            <div className={styles.header__menu}/>
            <div
                className={styles.header__logo}
                onClick={() => navigate(frontendRoutes.mainPage)}
            >
                <IconLogo/>
            </div>
            <div className={styles.header__menu}>
                <Button label={'Connect Wallet'}/>
            </div>
        </div>
    );
};
