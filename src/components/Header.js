import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <Link to="/" className='leftSide'>
        <div className="leftSide">
          <img src="logo3.jpg" alt="logo"></img>

          <div className="headerInfo">
            <h3>hold in line</h3>
            <p>Магазин оригинальных кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="rightSide d-flex">
        <li>
          <Link to="/favorites">
            <img className="mr-20" width={18} height={18} src="./img/heart.svg" alt="Закладки"></img>
          </Link>
        </li>
        <li>
          <p onClick={props.onClickCart} style={{ 'cursor': 'pointer' }}>Корзина</p>
        </li>
        <li>
          <p>Войти</p>
        </li>
      </ul>
    </header>
  )
}

export default Header