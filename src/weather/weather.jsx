import React, { useState, useEffect } from "react";
import axios from "axios";
import './weather.scss';

const Weather = React.memo(({ onInteract }) => {
    const [showToolTip, setShowToolTip] = useState(false)

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [background, setBackground] = useState('');
    const [suggestedCities, setSuggestedCities] = useState([]);

    const fetchWeather = async (city) => {
        const apiKey = 'e88b5320e077fb1c4baf0f80fb0c696f';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        setWeather(response.data);
    };

    const fetchBackground = async (background) => {
        const apiKey = 'TlBNLeaFLrERe5Hw6iOb5bI7FnlZ61lWxKSzCvIupbI';
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${apiKey}`);
        setBackground(response.data.results[0].urls.full);
    };

    const handleSearch = () => {
        fetchWeather(city);
        fetchBackground(city);
    };

    const handleInputChange = async (e) => {
        const cityName = e.target.value;
        setCity(cityName);

        if (cityName.length > 2) {
            const apiKey = 'e88b5320e077fb1c4baf0f80fb0c696f';
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${cityName}&type=like&sort=population&appid=${apiKey}`)
            const cities = response.data.list.map(city => `${city.name}, ${city.sys.country}`);
            setSuggestedCities(cities);
        } else {
            setSuggestedCities([]);
        }
    };

    const handleClick = () => {
        onInteract('Weather');
    }

    const handleMouseEnter = () => {
        setShowToolTip(true)
    }
    const handleMouseLeave = () => {
        setShowToolTip(false)
    }


    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className={`weather ${weather ? 'display-shown' : ''}`} style={{ backgroundImage: `url(${background})`, height: '100vh', width: '800px', color: 'white', padding: '20px' }}>
            {showToolTip && <div className="tooltip">Weather</div>}
            <section className={`animacion ${weather ? 'no-hover' : ''}`}>
                <button className="click" onClick={handleSearch}>Obtener Clima</button>
                <input
                    type="text"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="Ingrese una ciudad"
                    style={{ pointerEvents: weather ? 'auto' : 'auto' }}
                />
                {/* {suggestedCities.length > 0 || !weather && (

                    <ul className="suggested-cities">
                        {suggestedCities.map((city, index) => (
                            <li key={index}>{city}</li>
                        ))}
                    </ul>

                )} */}
            </section>
            {weather && (
                <div className="display">
                    <h2>{weather.name}</h2>
                    <p className="desc">{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</p>
                    <section>
                        <span>
                            <p>Temperatura: <b>{weather.main.temp}°C</b></p>
                            <p>Sensación Térmica: <b>{weather.main.feels_like}°C</b></p>
                            <p>Temperatura Máxima: <b>{weather.main.temp_max}°C</b></p>
                            <p>Temperatura Mínima: <b>{weather.main.temp_min}°C</b></p>
                            <p>Humedad: <b>{weather.main.humidity}%</b></p>
                        </span>
                        <span>
                            <p>Presión: <b>{weather.main.pressure} hPa</b></p>
                            <p>Velocidad del Viento: <b>{weather.wind.speed} m/s</b></p>
                            <p>Visibilidad: <b>{weather.visibility / 1000} km</b></p>
                            <p>Amanecer: <b>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</b></p>
                            <p>Atardecer: <b>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</b></p>
                        </span>
                    </section>
                </div>
            )}
        </div>
    )
});

export default Weather;