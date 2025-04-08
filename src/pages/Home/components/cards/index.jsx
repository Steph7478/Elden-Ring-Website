/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { cardData } from '../../../../components/data/Personajes/index'

export default function Cards() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const [prevArrowImg, setPrevArrowImg] = useState(
    '/src/assets/svg/arrowprev.png'
  )
  const [nextArrowImg, setNextArrowImg] = useState(
    '/src/assets/svg/arrownext.png'
  )
  const navigate = useNavigate()

  let goToPrev = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev()
    }
  }

  let goToNext = () => {
    if (currentSlide < cardData.length - 1) {
      sliderRef.current.slickNext()
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const handleNavigate = () => {
    navigate('/personajes', { state: { currentSlide } })
  }

  useEffect(() => {
    if (currentSlide === 0) {
      setPrevArrowImg('/src/assets/svg/prevgrayarrow.png')
    } else {
      setPrevArrowImg('/src/assets/svg/arrowprev.png')
    }

    if (currentSlide === cardData.length - 1) {
      setNextArrowImg('/src/assets/svg/nextgrayarrow.png')
    } else {
      setNextArrowImg('/src/assets/svg/arrownext.png')
    }
  }, [currentSlide])

  return (
    <div className="relative h-full w-full items-center justify-center">
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full justify-self-center"
      >
        {cardData.map((character, index) => {
          const isVisible =
            Math.abs(index - currentSlide) <=
            Math.floor(settings.slidesToShow / 2)

          return (
            <div
              key={index}
              className={`characters block ${index === currentSlide ? 'first-slide' : ''} ${isVisible ? 'block' : 'hidden'}`}
            >
              <div>
                <img
                  src={character.img}
                  alt={character.name}
                  className="max-h-[300px] w-full max-w-[300px] justify-self-center object-contain"
                />
              </div>
              <h3
                className={`${index === currentSlide ? 'block' : 'hidden'} m-0 justify-self-center pb-5 text-center text-2xl sm:w-[350px] md:w-[350px]`}
              >
                {character.name}
              </h3>
              <p
                className={`${index === currentSlide ? 'block' : 'hidden'} m-0 min-h-[60px] justify-self-center text-center sm:w-[300px] md:w-[350px]`}
              >
                {character.review}
              </p>
            </div>
          )
        })}
      </Slider>

      <div
        className="slick-prev flex scale-125 cursor-pointer text-white sm:ml-[15%] sm:mt-[10%] md:ml-[20%] md:mt-0 lg:ml-[28%] lg:mt-[5%] xl:ml-[32%] xl:mt-[4%] 2xl:ml-[35%]"
        onClick={goToPrev}
        id="btnprevarrow"
      >
        Prev
        <img src={prevArrowImg} />
      </div>
      <div
        className="slick-next scale-125 cursor-pointer text-white sm:mr-[15%] sm:mt-[10%] md:mr-[20%] md:mt-0 lg:mr-[28%] lg:mt-[5%] xl:mr-[32%] xl:mt-[4%] 2xl:mr-[35%]"
        onClick={goToNext}
        id="btnnextarrow"
      >
        <img src={nextArrowImg} />
        Next
      </div>

      <button
        onClick={handleNavigate}
        className="my-6 flex w-[120px] justify-center self-center justify-self-center bg-orange-red text-white"
      >
        Ver más
      </button>
    </div>
  )
}
