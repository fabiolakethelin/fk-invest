import React, { useState, useEffect } from "react"
import Button from "../form/Button";
import Coins from "../layout/Coins"
import './Featured.css'

const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setData(data)
        })
        .catch((err) => console.log(err))
    }, [])

    if (!data) return null

    return (
        <div className="featured">
            <div className="featured-container">
                <div className="left">
                    <h2>Explore top Crypto's like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <Button type='button' text="See More Coins"/>
                </div>
                <div className="right">
                    <Coins data={data} />
                </div>
            </div>
        </div>
    )
}

export default Featured