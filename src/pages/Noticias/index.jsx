/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Header from '../../components/common/header/header'
import SlidesNews from './components/slides/index'

export default function Noticias() {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [])

  return (
    <>
      <Header />
      <div className="h-[450px] w-full bg-news1 bg-cover bg-center bg-no-repeat"></div>
      <div className="flex h-full w-full flex-col items-center justify-center bg-news2 bg-cover bg-center bg-no-repeat pt-20 text-center">
        <h2>Noticias y actualizaciones</h2>

        <div className="relative my-10 flex max-w-[905px] items-center justify-center overflow-hidden sm:min-h-[300px] lg:min-h-[320px]">
          <div className="flex w-[50%]">
            <img
              src="/images/News/newsone.png"
              alt=""
              className="flex w-full max-w-full pr-5 sm:mt-24 lg:mt-12"
            />
          </div>

          <div className="absolute right-[40%] flex h-12 w-[330px] items-center justify-center border-2 border-light-yellow bg-light-orange text-xl text-light-yellow sm:top-16 lg:top-[28%] lg:translate-x-1/2">
            <h3 className="text-xl">Más de 5 miliones de ventas</h3>
          </div>

          <div className="w-[50%] pt-20">
            <p className="m-0 pl-5 pt-14 sm:text-center lg:text-end">
              ELDEN RING Shadow of the Erdtree, el título de RPG de acción de
              Bandai Namco Entertainment Inc. y FromSoftware, Inc.. ha alcanzado
              los 5 millones de unidades vendidas en todo el mundo en solo tres
              días desde su lanzamiento.
              <br /> Este hito es el resultado del tremendo apoyo de los fans de
              todo el mundo a quienes expresamos nuestra más sincera gratitud.
              <br />
              En esta expansión, los jugadores se adentran en un mundo lleno de
              misterios y peligros, plagado de jefes aún más peligrosos.
            </p>
          </div>
        </div>

        <div className="sm:minh-[300px] relative my-10 flex max-w-[905px] items-center justify-center overflow-hidden lg:min-h-[320px]">
          <div className="absolute right-[60%] flex h-12 w-[330px] translate-x-1/2 items-center justify-center border-2 border-light-yellow bg-light-orange text-xl text-light-yellow sm:top-16 lg:top-[28%]">
            <h3 className="text-xl">Gana una réplica de tamaño real</h3>
          </div>

          <div className="w-[50%] pt-20">
            <p className="m-0 pr-5 pt-14 sm:text-center lg:text-end">
              Participa en nuestro sorteo exclusivo para tener la oportunidad de
              ganar una réplica a tamaño real del brazo de Malenia, el
              legendario jefe al que puedes enfrentarte en Elden Ring! <br />
              Este concurso funciona con un sistema de lotería y se llevará a
              cabo desde el 6 de septiembre de 2024 a las 10:00 AM hasta el 4 de
              octubre de 2024 a las 03:00 PM. <br />
              Está abierto sólo a residentes de la Unión Europea y Reino Unido.
              ¡Pon a prueba tus conocimientos y participa en este emocionante
              sorteo!
            </p>
          </div>

          <div className="w-[50%] justify-center">
            <img
              src="/images/News/newstwo.png"
              alt="Imagen del sorteo"
              className="flex w-full max-w-full pl-5 sm:mt-24 lg:mt-12"
            />
          </div>
        </div>
        <div className="mt-20 flex h-full w-full items-center justify-center overflow-hidden">
          <SlidesNews />
        </div>
        <button className="my-10 w-[200px] hover:cursor-not-allowed hover:bg-gray-600">
          Buscar más noticias
        </button>
        <img
          src="/images/Decorations/guidedec.png"
          alt="#"
          className="mb-20 h-auto w-32"
        />
      </div>
    </>
  )
}
