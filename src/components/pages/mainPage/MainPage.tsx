import React, {useCallback} from 'react';
import styles from './MainPage.module.scss';
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-particles";
import {loadFull} from "tsparticles";

//ui
import {Content} from './Content/Content';
import Image1 from '../../../assets/images/image1.png'
import Image2 from '../../../assets/images/image2.png'
import Image3 from '../../../assets/images/image3.png'
import Image4 from '../../../assets/images/image4.png'

export const MainPage = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <div className={styles.mainPage}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    particles: {
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 4,
                        },
                        shape: {
                            type: ["images"],
                            image: [
                                {
                                    src: Image1
                                },
                                {
                                    src: Image2
                                },
                                {
                                    src: Image3
                                },
                                {
                                    src: Image4
                                },
                            ]
                        },
                        zIndex: {
                            value: 5,
                        },
                        size: {
                            value: {min: 500, max: 500},
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Content/>
        </div>
    );
};
