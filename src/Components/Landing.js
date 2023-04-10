import React, { useEffect, useState } from 'react';
import { getCoin } from '../Services/api';
import Loader from './Loader';
import Coin from './Coin';
import styles from "./Landing.module.css"

const Landing = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data.data);
            setCoins(data.data)
        }
        fetchAPI()
    }, [])

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <input className={styles.input} type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
            {
                coins.length ? <div className={styles.coinContainer}>
                    {
                        searchCoins.map(coin => <Coin
                            key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} marketCap={coin.market_cap}
                            priceChange={coin.market_cap_change_percentage_24h}
                        />)
                    }
                </div> :
                    <Loader />
            }


        </>
    );
};

export default Landing;