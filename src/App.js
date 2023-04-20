import Card from './Card.js'


function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="leftSide">
                    <img src="logo3.jpg" alt="logo"></img>
                    <div className="headerInfo">
                        <h3>hold in line</h3>
                        <p>Магазин оригинальных кроссовок</p>
                    </div>
                </div>
                <div className="rightSide">
                    <p>Корзина</p>
                    <p>Войти</p>
                </div>
            </header>

            <div className="content">
                <div className='d-flex a-center justify-between'>
                    <h2>
                        Все кроссовки
                    </h2>

                    <div className='search-block d-flex'>
                        <img src='/img/search.svg' alt='search'></img>
                        <input placeholder='Поиск...'></input>
                    </div>
                </div>
            
                <div className="items">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>

    );
}

export default App;