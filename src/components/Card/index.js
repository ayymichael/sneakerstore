import React from 'react';
import 'macro-css'
import styles from './Card.module.css'

function Card({onFavorite, onPlus, title, price, imageUrl}) {
    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        onPlus({title, price, imageUrl})
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/unliked.svg" alt="unliked"></img>
            </div>
            <img src={imageUrl} alt="sneaker"></img>
            <h3>{title}</h3>
            <div className="d-flex justify-between a-center">
                <div className={styles.info}>
                    <span>Цена:</span>
                    <p>{price} руб.</p>
                </div>
                
                <img 
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} 
                    alt="plus"
                />
            </div>
        </div>
    )
}

export default Card;