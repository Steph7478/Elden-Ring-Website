/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { cardData } from '../../../../components/data/Personajes/index'
import { useLocation } from 'react-router-dom'

export default function Cards({ onCharacterSelect }) {
  const [current, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const location = useLocation()
  const { currentSlide } = location.state || {}

  useEffect(() => {
    if (onCharacterSelect) {
      onCharacterSelect(cardData[current])
    }
  }, [current, onCharacterSelect])

  useEffect(() => {
    if (currentSlide !== undefined) {
      setCurrentSlide(currentSlide)
    }
  }, [currentSlide])

  let goToPrev = () => {
    sliderRef.current.slickPrev()
  }

  let goToNext = () => {
    sliderRef.current.slickNext()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    initialSlide: currentSlide ? currentSlide : 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  }

  return (
    <div className="relative w-[75%] items-center justify-center">
      <Slider ref={sliderRef} {...settings}>
        {cardData.map((character, index) => (
          <div key={index}>
            <img
              src={character.img}
              alt={character.name}
              className="h-full w-[450px] justify-self-center object-contain"
            />
          </div>
        ))}
      </Slider>
      <div
        className="slick-prev scale-150 cursor-pointer text-white md:ml-[5%] lg:ml-[10%]"
        onClick={goToPrev}
        id="btnprevarrow"
      >
        Prev
        <img src="/src/assets/svg/arrowprev.png" />
      </div>
      <div
        className="slick-next scale-150 cursor-pointer text-white md:mr-[5%] lg:mr-[10%]"
        onClick={goToNext}
        id="btnnextarrow"
      >
        <img src="/src/assets/svg/arrownext.png" />
        Next
      </div>
    </div>
  )
}
