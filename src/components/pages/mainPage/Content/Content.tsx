import React from 'react';
import styles from './Content.module.scss';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Typography} from "@mui/material";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

//ui

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Content = () => {

    const {width} = useWindowDimensions()
    const mobile: number = 834

    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}
                          direction={width <= mobile ? "column" : undefined}
                          justifyContent="center"
                          alignItems="center">
                        <Grid xs={9}>
                            <Item className={styles.box1}>
                                <Typography mt={3} variant="h3" className={styles.title}>Place the Order</Typography>
                            </Item>
                            <Item className={styles.box3}>
                                <Typography mt={3} variant="h3" className={styles.title}>My Orders</Typography>
                            </Item>
                        </Grid>
                        <Grid xs={width <= mobile ? 9 : 3}>
                            <Item className={styles.box2}>
                                <Typography mt={3} variant="h3" className={styles.title}>Order Book</Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};
