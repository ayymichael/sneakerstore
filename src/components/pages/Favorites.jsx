import React from "react";
import Card from "../Card";
import AppContext from "../../context";

function Favorites() {
    const {favorites, onAddToFavorite} = React.useContext(AppContext)

    return (
        <div className="content">
            <div className='d-flex a-center justify-between'>
                <h2>Мои закладки</h2>
            </div>

            <div className="items">
                {
                    favorites.map((item) => (
                        <Card
                            key={item.title}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites;