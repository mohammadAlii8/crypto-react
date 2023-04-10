import React, { useEffect, useState } from 'react';
import { getCoin } from '../Services/api';
import Loader from './Loader';

const Landing = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data.data);
            setCoins(data.data)
        }
        fetchAPI()
    }, [])
    return (
        <>
            <input type="text" placeholder='search' />
            {
                coins.length ? <div>
                    {
                        coins.map(coin => <p key={coin.id}>{coin.name}</p>)
                    }
                </div> :
                    <Loader />
            }

        </>
    );
};

export default Landing;