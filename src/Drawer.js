// import styles from './Drawer.module.css';
import Info from './components/Info'

function Drawer({ onRemove, onClose, items = [] }) {
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
                    <b>17990 руб.</b>
                  </li>
                  <li className='d-flex'>
                    <span>Скидка:</span>
                    <div></div>
                    <b>0 руб.</b>
                  </li>
                </ul>
                <button>Оформить заказ</button>

              </div>
            </div>)
            : (
              <Info title="Корзина пуста(" description="Для оформления заказа добавьте что-нибудь в корзину." image="./img/empty-cart.jpg" />
            )
        }





      </div>
    </div>
  )
}

export default Drawer