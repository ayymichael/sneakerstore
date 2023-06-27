import React from 'react';
import 'macro-css'
import styles from './Card.module.css'
import ContentLoader from "react-content-loader"
import AppContext from '../../context';

function Card({ id, onFavorite, onPlus, title, price, imageUrl, favorited = false, added = false, loading = false }) {

    const { isItemAdded } = React.useContext(AppContext)
    const [isFavorited, setIsFavorited] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({ id, title, price, imageUrl })
    }

    const onClickFavorite = () => {
        onFavorite({ id, title, price, imageUrl })
        setIsFavorited(!isFavorited)
    }

    return (
        loading ?
            <ContentLoader className={styles.card}
                speed={2}
                width={150}
                height={265}
                viewBox="0 0 150 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
                <rect x="0" y="101" rx="5" ry="5" width="150" height="15" />
                <rect x="0" y="132" rx="5" ry="5" width="100" height="15" />
                <rect x="0" y="161" rx="5" ry="5" width="80" height="25" />
                <rect x="119" y="156" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>
            : <div className={styles.card}>
                <div className={styles.favorite} onClick={onClickFavorite}>
                    <img src={isFavorited ? "./img/liked.svg" : "./img/unliked.svg"} alt="unliked"></img>
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
                        src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                        alt="plus"
                    />
                </div>
            </div>
    )
}

export default Card;