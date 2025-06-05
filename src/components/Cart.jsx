import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


export default function Cart({cartItems,add,remove,setCartItems}) {
  const totalPrice = cartItems.reduce(
    (sum,product) => sum + product.price*product.number,0
  )

  const buy = ()=>{
    alert("Дякую за замовлення")
  }
  const not = ()=>{
    setCartItems ([])
  }
  return (
    <Alert variant="success">
      <Alert.Heading>Корзина</Alert.Heading>
      {cartItems.length === 0 && <p>Корзина порожня</p>}
      <table>
        <tr>
          <td width="25%">Назва</td>
          <td width="25%">Кількість</td>
          <td width="25%">Ціна</td>
          <td width="25%">Всього</td>
        </tr>
   
        {cartItems.map((product)=> (
          <tr key={product.id}>
          <td width="25%">{product.name}</td>
          <td width="25%">  <Button onClick={() =>remove(product)} variant="dark">-</Button>{product.number}<Button onClick={() =>add(product)}variant="dark">+</Button></td>
          <td width="25%">{product.price}</td>
          <td width="25%">{product.price * product.number}</td>
        </tr>
        ))}

  
      </table>
      <hr />
      <p className="mb-0">
       Сума до сплати{totalPrice}
      </p>
      {cartItems.length > 0 && <Button onClick={buy} variant="info">Ваше замовлення прийнято</Button>}
         <Button  onClick={not} variant="dark" disabled={cartItems.length === 0}>Очистити корзину</Button>
    </Alert>
  )
}
