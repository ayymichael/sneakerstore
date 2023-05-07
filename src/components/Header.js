function Header(props) {
  return (
    <header>
      <div className="leftSide">
        <img src="logo3.jpg" alt="logo"></img>
        <div className="headerInfo">
          <h3>hold in line</h3>
          <p>Магазин оригинальных кроссовок</p>
        </div>
      </div>
      <div className="rightSide">
        <p onClick={props.onClickCart} style={{ 'cursor': 'pointer' }}>Корзина </p>
        <p>Войти</p>
      </div>
    </header>
  )
}

export default Header