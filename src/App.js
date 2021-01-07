import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import CoronaImage from './Images/image.png';

function App(){
    const [fetchedData, setData] = useState({});

    useEffect(() => {
        async function getData(){
            const data = await fetchData();
            setData(data);
            console.log(fetchedData);
        }
        getData();
    }, []);

    return(
        <div className={styles.container}>
            <img className={styles.image} src={CoronaImage} alt=""/>
            <Cards data= { fetchedData }/>
            <CountryPicker />
            <Chart />
        </div>
    )
}

export default App;
