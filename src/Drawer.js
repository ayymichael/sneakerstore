// import styles from './Drawer.module.css';
import React from 'react'
import Info from './components/Info'
import AppContext from './context'

function Drawer({ onRemove, onClose, items = [] }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const { setCartItems, cartItems } = React.useContext(AppContext)
  const totalPrice = cartItems.reduce((acc, obj) => acc+obj.price, 0)

  const onClickOrder = () => {
    setIsOrderComplete(true)
    setCartItems([])

  }
  return (
    <div className="overlay" >
      <div className="drawer">
        <h2>Корзина
          <img style={{
            paddingLeft: '66%',
            cursor: 'pointer'
          }}
            onClick={onClose}
            src="./img/btn-remove.svg" alt="Close" />
        </h2>

        {
          items.length > 0 ? (
            <div style={{ display: 'contents' }}>
              <div className='items'>
                {
                  items.map((obj) => (
                    <div key={obj.id} className='cartItem d-flex a-center justify-between'>
                      <div
                        style={{
                          backgroundImage: `url(${obj.imageUrl})`
                        }}
                        className='cartItemImg'></div>

                      <div className='mr-20'>
                        <p>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img onClick={() => onRemove(obj.id)} className='cartRemove' src='./img/btn-remove.svg' alt='remove'></img>
                    </div>
                  )
                  )
                }
              </div>

              <div className='cartTotalBlock'>
                <ul className='cartTotalBlock'>
                  <li className='d-flex'>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice} руб.</b>
                  </li>
                  <li className='d-flex'>
                    <span>Скидка (5%):</span>
                    <div></div>
                    <b>{totalPrice*0.05} руб.</b>
                  </li>
                </ul>
                <button onClick={onClickOrder}>Оформить заказ</button>

              </div>
            </div>)
            : (
              <Info 
                title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая("} 
                description={isOrderComplete ? "Ваш заказ скоро будет передан для подтверждения" : "Для оформления заказа добавьте что-нибудь в корзину."} 
                image={isOrderComplete ? "./img/complete-order.jpg" : "./img/empty-cart.jpg"} />
            )
        }
      </div>
    </div>
  )
}

export default Drawer