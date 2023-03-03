import {createContext, useState} from 'react';

//Create a initial context values (JS object)
const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteCoin) => {},
    removeFavourite: (coinName) => {},
    bitcoinIsFavourite: (coinName) => {},
});
// This function is for updating context values    
export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteCoin) {
        setUserFavourites((prevUserFavourites) => {
            return (
                prevUserFavourites.concat(favouriteCoin)
            )
        });
    }
    /*Returned array will missing the id??*/
    function removeFavouriteHandler(coinName) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter(coin => coin.name !== coinName)
        })
    }

    // Checks if bitcoin is already favourite or not   
    function bitcoinIsFavouriteHandler(coinName) {
        return userFavourites.some(coin => coin.name === coinName);
    }
    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,

        /*Pointers to the functions above as a value*/
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        bitcoinIsFavourite: bitcoinIsFavouriteHandler,
    };
    
    return (
    /*Provider is a built-in component of FavouritesContext*/
   <FavouritesContext.Provider value={context}>
        {props.children}
   </FavouritesContext.Provider>
   ) 
}

 export default FavouritesContext;