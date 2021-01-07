import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css'; 

export default function Cards({data: {confirmed, recovered, deaths, lastUpdate }}){
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Card className={cx(styles.infected, styles.card)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={ confirmed.value }
                            duration={2.6}
                            separator=','
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Card>
            <Card className={cx(styles.recovered, styles.card)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Recovered
                    </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.6}
                            separator=','
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </CardContent>
            </Card>
            <Card className={cx(styles.deaths, styles.card)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.6}
                            separator=','
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Deaths from COVID-19</Typography>
                </CardContent>
            </Card>
        </div>
    );
}
