import CoinItem from './CoinItem'

function CoinList(props) {

    return (
        <div>
            {/*Goes through each coin in filtered list & returns coin details*/}
            {props.coins.map((coin) => {
                return (
                    <CoinItem
                        name={coin.name}
                        icon={coin.icon}
                        price={coin.price}
                        symbol={coin.symbol}
                        />
                    );
                })
            }
        </div>
    )
}

export default CoinList