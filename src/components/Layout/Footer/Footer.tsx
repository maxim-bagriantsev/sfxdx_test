import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Footer.module.scss';
import {IconLogo} from "../../ui/Icons/IconLogo";
import {IconSocialsFacebook} from "../../ui/Icons/Socials/IconSocialsFacebook";
import {IconSocialsTwitter} from "../../ui/Icons/Socials/IconSocialsTwitter";
import {IconSocialsYoutube} from "../../ui/Icons/Socials/IconSocialsYoutube";
import {IconSocialsInstagram} from "../../ui/Icons/Socials/IconSocialsInstagram";

type FooterProps = {}

export const Footer = (props: FooterProps) => {
    const navigate = useNavigate();

    return (
        <div className={styles.footer}>
            <div className={styles.footer__info}>
                <div className={styles.content}>
                    <div className={styles.content__info}>
                        <div className={styles.content__info_item}>Private Policy</div>
                        <div className={styles.content__info_item}>Term & Conditions</div>
                        <div className={styles.content__info_item}>Cookie Policy</div>
                    </div>
                    <div className={styles.content__logo}>
                        <IconLogo/>
                    </div>
                    <div className={styles.content__social}>
                        <a className={styles.content__social_item} href={'https://www.facebook.com/'}
                           target={'_blank'}><IconSocialsFacebook/></a>
                        <a className={styles.content__social_item} href={'https://www.twitter.com/'}
                           target={'_blank'}><IconSocialsTwitter/></a>
                        <a className={styles.content__social_item} href={'https://www.youtube.com/'}
                           target={'_blank'}><IconSocialsYoutube/></a>
                        <a className={styles.content__social_item} href={'https://www.instagram.com/'}
                           target={'_blank'}><IconSocialsInstagram/></a>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    ©2022 All rights reserved. Powered by Atla
                </div>
            </div>
        </div>
    );
};
