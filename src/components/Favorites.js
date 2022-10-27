import React, { useEffect, useState } from 'react'
import Products from '../api/products.json'
import ProductItem from './ui/ProductItem'

function Favorites() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(Products)
  }, [])

  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold px-4 md:px-0 mb-3"> Favoriler</h3>
      <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1 overflow-hidden">
        {products &&
          products.map((product) => <ProductItem product={product} />)}
      </div>
    </div>
  )
}

export default Favorites
