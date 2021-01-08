import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';

export default function CountryPicker({ handleCountries }) {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchApi();
    }, [setFetchedCountries]);


    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue='' onChange={(e) => handleCountries(e.target.value)}>   
                    <option value="">Global</option>             
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{ country }</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
