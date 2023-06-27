import Card from '../Card'

function Home({
    items,
    searchValue,
    onAddToCart,
    onAddToFavorite,
    onChangeSearchInput,
    setSearchValue,
    isLoading
}) {
    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )

        return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
            <Card
                key={isLoading ? index : item.title}
                onFavorite={obj => onAddToFavorite(obj)}
                onPlus={obj => onAddToCart(obj)}
                loading={isLoading}
                {...item}
            />
        ))
    }

    return (
        <div className="content">
            <div className='d-flex a-center justify-between'>
                <h2>
                    {searchValue ? `Поиск по "${searchValue}"` : 'Все кроссовки'}
                </h2>

                <div className='search-block d-flex'>
                    <img src='./img/search.svg' alt='search'></img>
                    {searchValue && (
                        <img
                            onClick={() => { setSearchValue("") }}
                            className='clear'
                            src='./img/btn-remove.svg'
                            alt='clear'
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'></input>
                </div>
            </div>

            <div className="items">
                {renderItems()}
            </div>
        </div>
    )
}

export default Home;