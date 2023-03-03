import {Link} from 'react-router-dom'
import classes from './NavigationBar.module.css'


function NavigationBar() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Crypto</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>            
                    </li>
                    <li>
                        <Link to='/favourites'>My Favourites</Link>            
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar