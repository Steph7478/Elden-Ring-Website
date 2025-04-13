/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { News } from '../../../../components/data/News/index'

export default function SlidesNews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const [prevArrowImg, setPrevArrowImg] = useState('/public/svg/arrowprev.png')
  const [nextArrowImg, setNextArrowImg] = useState('/public/svg/arrownext.png')

  const goToPrev = () => sliderRef.current.slickPrev()
  const goToNext = () => sliderRef.current.slickNext()

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  useEffect(() => {
    setPrevArrowImg(
      currentSlide === 0
        ? '/public/svg/prevgrayarrow.png'
        : '/public/svg/arrowprev.png'
    )
    setNextArrowImg(
      currentSlide === News.length - 3
        ? '/public/svg/nextgrayarrow.png'
        : '/public/svg/arrownext.png'
    )
  }, [currentSlide])

  return (
    <div className="relative w-[75%] items-center justify-center">
      <div
        className="slick-prev -translate-x-5 -translate-y-10 scale-125 cursor-pointer text-white"
        onClick={goToPrev}
        id="btnprevarrow"
      >
        Prev
        <img src={prevArrowImg} />
      </div>

      <Slider ref={sliderRef} {...settings}>
        {News.map((news, index) => (
          <div key={index}>
            <div className="px-1">
              <img
                src={news.img}
                alt={news.title}
                className="w-full max-w-[400px] justify-self-center object-contain"
              />
              <h3 className="text-base">{news.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="slick-next -translate-y-10 translate-x-5 scale-125 cursor-pointer text-white"
        onClick={goToNext}
        id="btnnextarrow"
      >
        <img src={nextArrowImg} />
        Next
      </div>
    </div>
  )
}
