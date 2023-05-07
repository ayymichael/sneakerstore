// import styles from './Drawer.module.css';

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
            src="/img/btn-remove.svg" alt="Close" />
        </h2>

        {
          items.length > 0 ? (
            <div style={{display:'contents'}}>
              <div className='items'>
                {
                  items.map((obj) => (
                    <div className='cartItem d-flex a-center justify-between'>
                      <div
                        style={{
                          backgroundImage: `url(${obj.imageUrl})`
                        }}
                        className='cartItemImg'></div>

                      <div div className='mr-20'>
                        <p>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img onClick={() => onRemove(obj.id)} className='cartRemove' src='/img/btn-remove.svg' alt='remove'></img>
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
              <div className="cartEmpty d-flex a-center justify-center">
                <img className="mb-20" width='120px' height="120px" src="/img/empty-cart.jpg" alt="CartEmpty"></img>
                <h2>Корзина пустая</h2>
                <p>Добавьте хотя бы одну вещь, чтобы сделать заказ</p>
                <button onClick={onClose} height="20px" className="greenButton">
                  <img src="/img/arrow.svg" alt="Arrow" />
                  Вернуться назад
                </button>
              </div>
            )
        }





      </div>
    </div>
  )
}

export default Drawer