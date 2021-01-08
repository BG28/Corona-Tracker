import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import CoronaImage from './Images/image.png';

function App(){
    const [fetchedData, setData] = useState({});
    const [fetchedCountry, setCountry] = useState('');
    

    useEffect(() => {
        async function getData(){
            const data = await fetchData();
            setData(data);
            console.log(fetchedData);
        }
        getData();
    }, []);

    async function handleCountryChange(country){
        setCountry(country);
        const data = await fetchData(country);
        setData(data);
    }

    return(
        <div className={styles.container}>
            <img className={styles.image} src={CoronaImage} alt=""/>
            <Cards data= { fetchedData }/>
            <CountryPicker 
            handleCountries={handleCountryChange}
            />
            <Chart
                data={fetchedData} 
                country={fetchedCountry}
            />
        </div>
    )
}

export default App;
