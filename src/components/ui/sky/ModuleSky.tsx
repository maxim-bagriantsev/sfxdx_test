// ** React Imports
import React from 'react';

// ** Styles Imports
import classNames from 'classnames/bind';
import styles from './ModuleSky.module.scss';

// ** Icons Imports

import Ellipse1 from '../Icons/MainPage/Ellipse1.png'
import Ellipse2 from '../Icons/MainPage/Ellipse2.png'
import Ellipse3 from '../Icons/MainPage/Ellipse3.png'
import Ellipse4 from '../Icons/MainPage/Ellipse4.png'

// @ts-ignore
import Sky from 'react-sky';

const cx = classNames.bind(styles);



const ModuleSky = () => {


    return (
        <div className={cx('moduleSky')}>
            <Sky
                images={{
                    0: Ellipse1,
                    1: Ellipse2,
                    2: Ellipse3,
                    4: Ellipse4,
                }}
                how={4} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
                time={10} /* time of the animation. Defaults at 20s */
                size={'600px'} /* size of the rendered images. Defaults at 150px */
                background={'none'} /* color of background. Defaults to none */
            />
        </div>
    );
};
export default ModuleSky;

