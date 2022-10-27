import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Banners from '../api/banners.json'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function NextButton({ onClick, className }) {
  return (
    <button
      className={`text-purple-700 absolute top-1/2 -right-7 -translate-y-1/2 `}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  )
}
function PrevButton({ onClick, className }) {
  return (
    <button
      className={` text-purple-700 absolute top-1/2 -left-7 -translate-y-1/2 `}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  )
}

function Campaigns() {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    setBanners(Banners)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="container mx-auto md:pt-6">
      <h2 className="hidden md:block text-sm font-semibold px-4 md:px-0 mb-3">
        Kampanyalar
      </h2>
      <Slider className="-mx-2 relative" {...settings}>
        {banners.length &&
          banners.map((banner) => (
            <div className="block px-2" key={banner.id}>
              <img
                className="w-full md:rounded "
                src={banner.image}
                alt="kampanyalar"
              />
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default Campaigns
