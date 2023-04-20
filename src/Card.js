function Card() {
    return (
        <div className="card">

        <img src="./arctic pink.jpg" alt="sneaker"></img>
        <h3>Nike Air Jordan 1 Mid</h3>
        <div className="d-flex justify-between a-center">
            <div className="info">
                <span>Цена:</span>
                <p>17990 руб.</p>
            </div>
            <button>
                <img width={11} height={11} src="/img/plus.svg" alt="add to cart"></img>
            </button>
        </div>
        </div>
    )
}

export default Card;