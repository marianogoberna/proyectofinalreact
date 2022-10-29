import React from "react"
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Card = ({id, name, price, stock, img}) => {
  return (
    <Link to={`/itemdetail/${id}`}>
        <div>{name}</div>
        <div>Precio: {price}</div>
        <div>Stock: {stock}</div>
        <img src={img} className="foto"/>
    </Link>
  )
}

const ItemListContainer = () => {

  const [products, setProducts] = useState([])  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
  }, [])
    
  const getProducts = () => { 
      const db = getFirestore()
      const productCollection = collection(db, "products")
      getDocs (productCollection).then( res => {
          const productsData = res.docs.map( d => ({id:d.id,...d.data()}) )
          console.log(productsData);
          setProducts(productsData)
          setLoading(false)
      })
   }

  return (
    <div>
        {loading ? <h1>Cargando...</h1>
        : 
        products.map( p => <Card key={p.id} {...p} />)}
        
    </div>
  )
}
export default ItemListContainer