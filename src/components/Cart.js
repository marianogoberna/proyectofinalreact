import React from "react"
import { useCart } from "../cotext/cartContext"

const Cart = () => {

  const {products, clearCart} = useCart()

  return (
    <div>
        <div>Carrito</div>
        {products.map( (p, i) => <li key={i}>{p.name}</li>)}
        <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}
export default Cart