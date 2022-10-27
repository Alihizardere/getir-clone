import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useWindowWidth } from '@react-hook/window-size'

function HeroSection() {
  const [selected, setSelected] = useState('TR')

  const windowWith = useWindowWidth()

  const phones = {
    US: '+1',
    GB: '+44',
    FR: '+33',
    TR: '+90',
    IT: '+39',
    DE: '+40',
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  }

  return (
    <div className=" relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 ">
      {windowWith >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover "
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
              alt="getir1"
            />
          </div>

          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
              alt="getir2"
            />
          </div>

          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
              alt="getir3"
            />
          </div>
        </Slider>
      )}

      <div className="md:container mx-auto flex items-center justify-between relative md:absolute top-0 left-0  md:left-1/2 -translate-x-0  md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="getir"
          />

          <h3 className=" text-4xl mt-10 text-white">
            Dakikalar içinde <br />
            kapınızda
          </h3>
        </div>
        <div className="w-full  md:w-[400px] bg-gray-50 md:rounded-lg p-6">
          <h4 className="flex justify-center mb-4 text-primary-brand-color font-semibold ">
            Giriş yap veya kayıt ol
          </h4>

          <div className="grid gap-y-3.5">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="relative flex-1 block  cursor-pointer">
                <input
                  required
                  className=" h-14 px-4 border-2 border-gray-200 bg-white w-full rounded outline-none flex items-center justify-center transition-colors hover:border-primary-brand-color focus:border-primary-brand-color text-sm pt-2  peer"
                  type="text"
                />

                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-gray-900 text-opacity-50 peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color  peer-valid: text-sm">
                  Telefon Numarası
                </span>
              </label>
            </div>

            <button className="bg-brand-yellow h-12 w-full text-primary-brand-color text-sm font-semibold  rounded-md transition-colors hover:bg-primary-brand-color hover:text-brand-yellow">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
