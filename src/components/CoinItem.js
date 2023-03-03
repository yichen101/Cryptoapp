import {useContext} from 'react' 
import classes from './CoinItem.module.css'
import FavouritesContext from '../store/favourites-context'

function CoinItem(props) {

    const favouritesCtx = useContext(FavouritesContext); /*'context' object is called in FavouritesCtx*/

    const bitcoinIsFavourite = favouritesCtx.bitcoinIsFavourite(props.name) /*Call bitcoinIsFavourite item which points to bitcoinIsFavouriteHandler method */

    function toggleFavouriteStatus() {

        /*Allows a connection between this component and Context (FavouriteContext)*/
            if (bitcoinIsFavourite) {
                favouritesCtx.removeFavourite(props.name);
            } else {
                favouritesCtx.addFavourite( {
                    name: props.name,
                    icon: props.icon,
                    price: props.price,
                    symbol:props.symbol,
                });
            }
    }

    return (
        <div className={classes.cryptoDisplay}>
            <div className={classes.coin} >
                <h1>Name: {props.name}</h1>
                <img src={props.icon} alt={props.name}/>
                <h3>Price: {props.price}</h3>
                <h3>Symbol: {props.symbol}</h3>
                <div className= {classes.actions}>
                <button onClick={toggleFavouriteStatus}>
                    {bitcoinIsFavourite ? 'Remove from Favourites': 'Add to Favourites'}
                </button>
                </div>
            </div>
        </div>
    )
}

export default CoinItem