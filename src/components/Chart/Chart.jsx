import React, { useState, useEffect } from 'react';
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";


export default function Chart({ data: {confirmed, recovered, deaths}, country }) {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        async function fetchAPI(){
            setDailyData( await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ?
        (
        <Line 
            data={{
               labels: dailyData.map(({ date }) => date),
               datasets: [{
                   data: dailyData.map(({ confirmed }) => confirmed),
                   label: 'Infected',
                   borderColor: '#3333ff',
                   fill: true
               }, {
                   data: dailyData.map(({ deaths }) => deaths),
                   label: 'Deaths',
                   borderColor: 'red',
                   backgroundColor: 'rgba(255, 0, 0, 0.5)',
                   fill: true
               }] 
            }}
            options={{
                maintainAspectRatio: false            
            }}
        />
        ) : null
    );

    const barChart = (
        confirmed ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data:[ confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false},
                    title: {display: true, text: `Current state in ${country}`},
                    maintainAspectRatio: false
                }}
            />
        ): null
    );

    return (
        <div className={ styles.container}>
            {country ? <h1>{country}</h1> : <h1>Global</h1>}               
            <div className={styles.chart}>
                {country ? barChart : lineChart}
            </div>    
        </div>
    )
}


