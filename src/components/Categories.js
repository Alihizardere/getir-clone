import React from 'react'
import { useState, useEffect } from 'react'
import CategoryData from '../api/categories.json'
import CategoryItem from './ui/CategoryItem'

function Categories() {
  const [categories, SetCategories] = useState([])

  useEffect(() => {
    SetCategories(CategoryData)
  }, [])

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold px-4 md:px-0 mb-3">Kategoriler</h3>
        <div className="grid grid-cols-4  md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {categories &&
            categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
