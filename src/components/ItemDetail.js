import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getFirestore, doc, getDoc } from "firebase/firestore"
import { useCart } from "../cotext/cartContext"


const ItemDetail = () => {

  const {id} = useParams()

  const [product, setProduct] = useState({}) 
  const {addToCart} = useCart()

  useEffect(() => {
    getProduct()
  }, [])
    
  const getProduct = () => { 
      const db = getFirestore()
      const productCollection = collection(db, "products")
      const docRef = doc(productCollection, id)
      getDoc (docRef).then( res => {
        console.log( res.data() );
        setProduct(res.data())
      })
      }

  const addHandler = () => {
    addToCart(product)

  }    

  return (
    <div>
        <div>{product.name}</div>
        <div>Precio: {product.price}</div>
        <div>Stock: {product.stock}</div>
        <img src={product.img} className="foto2"/>
        <button onClick={addHandler}>Agregar al carrito</button>
    </div>
  )
}
export default ItemDetail