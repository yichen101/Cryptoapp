import {useContext} from 'react'

import FavouritesContext from '../store/favourites-context'
import CoinList from '../components/CoinList'

function FavouritesPage() {
    const favouritesCtx = useContext(FavouritesContext); /*'context' object is called in FavouritesCtx*/

    let content;
    if (favouritesCtx.totalFavourites === 0) {
        content = <p>You have no favourites yet. Want to add some?</p> /*Display message if there are no current favourites*/
    } else {
        content = <CoinList coins={favouritesCtx.favourites}/> /*Display favourited coins*/
    }

    return( <section>
        <div  className='text'>
            <h1>
                My Favourites
            </h1>
            {content}
        </div>
    </section>
    )
}

export default FavouritesPage