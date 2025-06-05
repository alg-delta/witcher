import React from 'react'
import Product from './Product'
import Row from "react-bootstrap/Row"
export default function Main({ products, add }) {

  return (
   <Row className='gap-4 justify-content-center'>
      {products.map((product) => (
        <Product key={products.id} product={product} add={add} />
        ))}
   </Row>
  )
}
