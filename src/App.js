import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Drawer from './Drawer.js';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Header from './components/Header.js';
import AppContext from './context.js';


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)


  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://647f4126c246f166da906efd.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://647f4126c246f166da906efd.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://my-json-server.typicode.com/ayymichael/demoapi/items')
      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    console.log(obj);
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://647f4126c246f166da906efd.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        axios.post('https://647f4126c246f166da906efd.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
      }
    } catch (error) {
      console.log('Не удалось добавить в корзину(')
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://647f4126c246f166da906efd.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://647f4126c246f166da906efd.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      console.log('Не удалось добавить в избранное', error);
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://647f4126c246f166da906efd.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened }}>
      <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route path="/" element={<Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            onChangeSearchInput={onChangeSearchInput}
            setSearchValue={setSearchValue}
            isLoading={isLoading}
          />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;