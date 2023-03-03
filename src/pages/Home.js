import Axios from 'axios';
import {useEffect, useState} from 'react';
import CoinList from '../components/CoinList'; 

function HomePage() {

    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    
    /*Grab data from API*/
    useEffect ( () => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
          (response) => {
            setListOfCoins(response.data.coins);
          }
        );
      }, []);
    
    /* New array of filtered coins based on search input*/
    const filteredCoins = listOfCoins.filter(function(coin) {
      return (
        coin.name.toLowerCase().includes(searchWord.toLowerCase())
      )
    });

    return (
      <div className='App'>
        <div className='cryptoHeader'>
          <input type='text' placeholder='Search for a coin...' onChange={ (userInput) => {
            setSearchWord(userInput.target.value)
          }} />
        </div>
        <div>
          <CoinList coins={filteredCoins}/>
        </div>
      </div>
    )
}

export default HomePage