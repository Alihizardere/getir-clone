import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

function ProductItem({product}) {
  return (
    <div className="bg-white relative flex flex-col gap-y-1 items-center text-center  text-sm font-semibold p-3">
        <button className=" bg-white    absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md transition-colors hover:border-brand-color">
            <AiOutlinePlus fontSize={16}/>
        </button>
        <img className="px-2" src={product.image} alt="" />
        <div className="text-brand-color">{product.price} ₺</div>
        <div className="">{product.title}</div>
        <div className="text-gray-500">{product.alt}</div>
       
    </div>
  )
}

export default ProductItem