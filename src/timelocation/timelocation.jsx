import React, { useState, useEffect } from "react";
import './timelocation.scss';
import axios from "axios";

const LocalTimeAndLocation = () => {
    const [time, setTime] = useState(new Date());
    const [location, setLocation] = useState({ city: '', country: '' });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        axios.get('https://ipinfo.io/json?token=1bd1e54df86dac')
            .then(response => {
                const { city, country } = response.data;
                setLocation({ city, country });
            })
            .catch(error => {
                console.error('Error fetching the location data', error);
            });
        return () => clearInterval(timer);
    }, []);
       
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = time.toLocaleDateString('es-ES', dateOptions);

    return (
        <div className="time">
            <h2 className="dia">{currentDate}</h2>
            <h1>{time.toLocaleTimeString()}</h1>
            <h2>{location.city}, {location.country}</h2>
        </div>
    );
};

export default LocalTimeAndLocation;





