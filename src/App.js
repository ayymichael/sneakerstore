import React from 'react';
import axios from 'axios';
import Card from './components/Card/index.js'
import Drawer from './Drawer.js';
import Header from './components/Header.js';

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)


  React.useEffect(() => {
    axios.get('https://6457c6710c15cb148210ce11.mockapi.io/items').then(res => {
      setItems(res.data)
    })

    axios.get('https://6457c6710c15cb148210ce11.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6457c6710c15cb148210ce11.mockapi.io/cart', obj)

    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6457c6710c15cb148210ce11.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className='d-flex a-center justify-between'>
          <h2>
            {searchValue ? `Поиск по "${searchValue}"` : 'Все кроссовки'}
          </h2>

          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='search'></img>
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
          {
            items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('нажали на сердечко')}
                onPlus={onAddToCart}
              />
            ))
          }
        </div>
      </div>
    </div>

  );
}

export default App;