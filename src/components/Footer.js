/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import MenuData from '../api/menus.json'
import MenuItem from './ui/MenuItem'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BiGlobe } from 'react-icons/bi'

function Footer() {
  const [menus, SetMenus] = useState([])

  useEffect(() => {
    SetMenus(MenuData)
  }, [])

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2  lg:grid-cols-4 px-4 md:px-0 py-8">
          <section>
            <h6 className="text-lg text-brand-color ">Getir'i indirin!</h6>
            <nav className="grid grid-cols-2  md:grid-cols-1 gap-2  md:gap-x-0">
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <MenuItem key={index} {...menu} />
          ))}
        </div>
        <div className="border-t border-t-gray-100 flex flex-col md:flex-row gap-y-2 md:gap-y-0 justify-between items-center py-6">
          <div className="text-xs text-gray-500 flex  gap-x-8">
            &copy; 2021 Getir
            <a
              className=" relative text-brand-color before:absolute before:w-[3px] before:h-[3px] before:bg-black before:rounded-full before:-left-3 before:top-1/2 before:-translate-y-1/2"
              href="#"
            >
              {' '}
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3 text-gray-500">
            <a
              className="w-8 h-8  flex items-center justify-center rounded-lg transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color"
              href=""
            >
              {' '}
              <FaFacebook size={20} />
            </a>
            <a
              className="w-8 h-8  flex items-center justify-center rounded-lg transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color"
              href=""
            >
              <FaTwitter size={20} />
            </a>
            <a
              className="w-8 h-8  flex items-center justify-center rounded-lg transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color"
              href=""
            >
              <FaInstagram size={20} />
            </a>
            <a
              className=" flex h-8 items-center px-2 gap-x-2 border rounded border-gray-100 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent "
              href=""
            >
              {' '}
              <BiGlobe size={18} /> Türkçe(TR){' '}
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer
