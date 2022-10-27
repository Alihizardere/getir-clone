/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState, useEffect} from 'react'
import {Collapse} from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size';
import {IoIosArrowDown} from 'react-icons/io'


function MenuItem({title, items}) {

  const [isOpen, SetIsOpen]= useState(true)
  const windowWith = useWindowWidth();


  useEffect(()=>{
    if(isOpen && windowWith<768){
      SetIsOpen(false)
    }
    if(!isOpen && windowWith>=768){
      SetIsOpen(true)
    }
  },[ windowWith])

  const toggleCollapse = () =>{
    if(windowWith<=768){
      SetIsOpen(!isOpen)
    }
  }

  return (
    <div>
        <section>
            <nav className="grid gap-y-2  md:gap-y-4">
            <h6 onClick={toggleCollapse} className="text-lg text-brand-color flex justify-between items-center">
              {title}
              <button className=" w-6 h-6 grid md:hidden place-items-center bg-primary-brand-color bg-opacity-10 rounded-lg">
                  <span className={`transition-all transform ${isOpen ? "-rotate-180": "" }  `}>
                     <IoIosArrowDown/>
                  </span>
              </button>
              </h6>
            <Collapse isOpened={isOpen}>
            <nav>
              <ul className="grid mb-1 md:mb-0 gap-y-1 md:gap-y-2">
                {items.map((item,key)=>(
                  <li key={key}>
                    <a className="text-sm hover:text-brand-color" href="#">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            </Collapse>
          </nav>
            
        </section>
    </div>
  )
}

export default MenuItem