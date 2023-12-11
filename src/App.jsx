import './App.css';
import {useState} from "react";
import axios from "axios";
import Worldmap from "./assets/world_map.png";
import regionColor from "./Helpers/Region.jsx";



function App() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');


    async function fetchCountries() {
        setError('');
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const sortedCountries = response.data

            sortedCountries.sort((a, b) => {
                return a.population - b.population;
            });

            setCountries(response.data);
            console.log(response.data);

        } catch(e) {
            console.error(e);
            setError('Het ophalen van de data is mislukt, probeer het opnieuw')
        }
    }

    const [show, setShow] = useState(false);
    const hideButton = () => {
        setShow(true);
    };


    return (
        <>
            <main>
            <img src={Worldmap} alt='World map' className='world-map' />
            <h1>World Regions</h1>
            {!show && <button type='button' className='get-list-button' onClick={() => {
                fetchCountries();
                hideButton();
            }}>
                Get all countries!
            </button>}
            {error && <p>{error}</p>}
            {countries.length > 0 && <ul className='country-list'>
                {countries.map((country) => {
                    return <li key={country.name?.common} className='country-info'>
                        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className='flag-img'/>
                        <span className={regionColor(country.region)}>{country.name.common}</span>
                        <p>Has a population of {country.population} people</p>
                    </li>
                })}
            </ul>
            }
            </main>
            </>
    )
}

export default App