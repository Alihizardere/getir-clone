import React from 'react'

function CardItem({card}) {
  return (
    <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center ">
      <img className=" w-[150px] h-[150px] mb-6"  src={card.image} alt="" />
      <h3 className="text-lg font-semibold text-brand-color"> {card.title}</h3>
      <p className="mt-2 text-sm text-gray-600"> {card.description}</p>
    </div>
  )
}

export default CardItem