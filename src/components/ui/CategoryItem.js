/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function CategoryItem( {category}) {
  return (
    
        
        <a href="#" className="flex  group flex-col items-center justify-center rounded transition-colors hover:bg-purple-50 hover:rounded p-4">
            <img src={category.image} className="w-12 h-12 object-cover border-gray-200  rounded-lg " alt={category.title} />
            <span className="text-sm  font-semibold transition-colors group-hover:text-purple-700 whitespace-nowrap block mt-3">{category.title}</span>
        </a>  

    
  )
}

export default CategoryItem