import React, { useEffect, useState } from 'react'
import CardItem from './ui/CardItem'
import CardsData from '../api/cards.json'

function Cards() {
  const [cards, SetCards] = useState([])

  useEffect(() => {
    SetCards(CardsData)
  }, [])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0  gap-4 mb-8">
      {cards && cards.map((card) => <CardItem card={card} />)}
    </div>
  )
}

export default Cards
