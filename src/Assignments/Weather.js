import React,{useState, useEffect, useRef,} from "react"; 

const Weather = () => {
    const [city, setCity] = useState('junnar');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const controllRef = useRef(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            setError(null);

            if (controllRef.current) {
                controllRef.current.abort();
            }
            controllRef.current = new AbortController();
            const signal = controllRef.current.signal;

            try {
                const apikey ='e2247e199dc40219d4edc25d57f6b99a';
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?{apikey}&query=${encodeURIComponent}{city}&units=metric`,
                    { signal }
                );  
                if (!response.ok) {
                    throw new Error(`HTTP error:$ {response.status}`);
                }
                const data = await response.json();

                console.log(data);

                if (data.error) {
                    throw new Error (`weatherStack API error: ${data.error.message}`);
                }
                setWeatherData(data.current);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(`Failed to fetch weather data: ${err.message}`); //Handle errors
                }
    }finally {
        setLoading(false);
    }
};
fetchWeatherData();


return () => {
    if (controllRef.current) {
        controllRef.current.abort();
    }
};  
    }, [city]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (    
        <div>
            <h1>Weather Dashboard</h1>

            <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city name"
            />

            <button onClick={() => setCity(city)}>Get Weather</button>

            {loading && <p>Loading...</p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weatherData && (
                <div>
                    <h2>Weather in {city}</h2>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Weather: {weatherData.weather_discriptions[0]}</p>
                    <p>Wind Speed:{weatherData.wind_speed} km/h</p>
            </div>
            )}
        </div>
    );
};
export default Weather;
            