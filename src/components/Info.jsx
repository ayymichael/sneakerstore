import React from 'react'
import AppContext from '../context';

export const Info = ({title, image, description}) => {
  const {setCartOpened} = React.useContext(AppContext)
  return (
    <div className="cartEmpty d-flex a-center justify-center">
      <img className="mb-20" width='120px' height="120px" src={image} alt="CartEmpty"></img>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={setCartOpened} height="20px" className="greenButton">
        <img src="./img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  )
}

export default Info;
