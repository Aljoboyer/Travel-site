import {useEffect, useState} from 'react'

const Destination = () => {
    const [places,setPlaces] = useState([])

    useEffect(() => {
        fetch('https://aljoboyer.github.io/traveldata.JSON')
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[])

    return [places,setPlaces];
}

export default Destination;