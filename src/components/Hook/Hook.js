import { async } from '@firebase/util';
import {useEffect, useState} from 'react'


const Destination = (file) => {

    useEffect(() => {
        fetch('https://aljoboyer.github.io/traveldata.JSON')
        .then(res => res.json())
        .then(data => (data))
    },[])
    return {
       
        
    };
}

export default Destination;