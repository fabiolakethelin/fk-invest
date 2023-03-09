import { FiArrowUp, FiArrowDown } from 'react-icons/fi'
import './Coins.css'

const Coins = (props) => {
    return (
        <>
            {props.data.map((coin) => (
                <div className='coin'>
                    <div className="top">
                        <img src={coin.image} alt='' />
                    </div>
                    <div>
                        <h5>{coin.name}</h5>
                        <p>{coin.current_price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
                    </div>
                                        
                    {coin.price_change_percentage_24h < 0 ? (
                        <span className='down'>
                            <FiArrowDown />
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='up' >
                            <FiArrowUp />
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                ))}
        </>
    )
}

export default Coins