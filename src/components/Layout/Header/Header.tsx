import {useNavigate} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {frontendRoutes} from '../../../utils/router/routes';
import {InjectedConnector} from "@web3-react/injected-connector";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";

//  ui
import {IconLogo} from '../../ui/Icons/IconLogo'
import {IconFox} from '../../ui/Icons/Header/IconFox'
import {IconBug} from '../../ui/Icons/Header/IconBug'
import {Button} from "../../ui/Button";
import {ButtonAccess} from "../../ui/ButtonAccess";

const cx = classNames.bind(styles);

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        1, // Mainet
        3, // Ropsten
        4, // Rinkeby
        5, // Goerli
        42, // Kovan
    ],
})

export const Header = () => {
    const navigate = useNavigate();

    const { account, activate, active} = useWeb3React<Web3Provider>()

    const onClick = () => {
        activate(injectedConnector)
    }
    const shorter = (str: any) =>
        str?.length > 8 ? str.slice(0, 10) + '...' + str.slice(-4) : str


    return (
        <div className={cx('header')}>
            <div className={styles.header__left}/>
            <div
                className={styles.header__logo}
                onClick={() => navigate(frontendRoutes.mainPage)}
            >
                <IconLogo/>
            </div>
            <div className={styles.header__right}>
                {active ? (
                    <ButtonAccess icon={<IconFox/>} label={`${shorter(account)}`} prefixIcon={<IconBug/>}/>
                ) : (
                    <Button label={'Connect Wallet'} clicked={onClick}/>
                )}
            </div>
        </div>
    );
};
