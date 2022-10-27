/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function MobileApp() {
  return (
    <div className="bg-brand-color md:rounded-md  flex  md:justify-between items-center  text-white mb-8">
      <div className="flex flex-col text-center md:text-left gap-y-3 p-10">
        <h3 className=" text-2xl font-bold"> Getir'i İndirin</h3>
        <p className="font-semibold">
          {' '}
          İstediğiniz ürünleri dakikalar içinde kapınıza
          <br />
          getirelim.
        </p>
        <nav className=" mt-5 flex flex-wrap  justify-center gap-2">
          <a className="transition-all transform hover:scale-105" href="#">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
              className="md:h-8 lg:h-auto"
            />
          </a>
          <a className="transition-all transform hover:scale-105" href="#">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
              className="md:h-8 lg:h-auto"
            />
          </a>
          <a className="transition-all transform hover:scale-105" href="#">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
              className="md:h-8 lg:h-auto"
            />
          </a>
        </nav>
      </div>
      <picture className="pt-6 hidden md:block md:self-end">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
        />
      </picture>
    </div>
  )
}

export default MobileApp
