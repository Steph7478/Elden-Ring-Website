/* eslint-disable no-unused-vars */
import React from 'react'
import Cards from './components/cards/index'
import Header from './components/header/header'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <div className="h-full w-full bg-home1 bg-cover bg-no-repeat">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="mb-20">La orden borada ha caído</h2>
          <p className="w-[49%] text-center">
            Levántate , Tiznado , y déjate guiar por la gracia para blandir el
            poder blandir el poder del Anillo de Elden y convertirte en un Señor
            de Elden en las Tierras intermedias . En las Tierras Intermedias
            gobernadas por la Reina Marika la Eterna , el Anillo de Elden , la
            fuente del Terrárbol , ha sido destruido. <br /> La descendencia de
            Marika , todos semidioses , reclamaron los fragmentos del Anillo de
            Elden conocidos como las Grandes Runas , y la esencia de su nueva
            fuerza desencadenó una guerra : La Destrucción . Una guerra que
            significó el abandono por parte de la Gran Voluntad . Y ahora la
            guía de la gracia llegará a los Tiznados que fueron despreciados por
            la gracia del oro y exiliados de las Tierras Intermedias , entra más
            allá del mar brumoso para pararte ante el Anillo de Elden .
          </p>
          <Link to="/guias">
            <button className="mt-16 w-[300px] cursor-pointer bg-orange-red text-white">
              Conviértete en el Señor del Elden
            </button>
          </Link>
        </div>

        <img
          src="/images/Decorations/middle.png"
          className="justify-self-center overflow-hidden sm:w-[500px] md:w-[600px] lg:w-[800px]"
        />

        <div className="mt-20 flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
          <h2 className="text-center">Personajes</h2>
          <Cards />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-home2 bg-cover bg-center bg-no-repeat text-center">
        <h2 className="pb-10 pt-20">Objetos</h2>
        <div className="mb-20 flex border-2 border-light-yellow bg-dark-brown sm:w-[400px] sm:flex-col md:min-h-[310px] md:w-[725px] md:flex-row">
          <div className="flex items-center justify-center sm:w-full sm:pt-14 md:w-[43%] md:p-0 md:px-10">
            <img
              className="border-2 border-light-yellow bg-stone-900 object-contain sm:w-[280px] md:h-[240px] md:w-[240px] md:justify-self-center"
              src="/images/Items/flask-crimson.png"
              alt="Frasco"
            />
          </div>

          <div className="flex flex-col sm:w-full sm:px-5 md:w-[58%] md:p-0 md:pr-10 md:pt-5">
            <h3 className="my-5 text-3xl sm:text-center md:text-start">
              Frasco de lágrimas carmesí
            </h3>
            <p className="m-0 overflow-y-auto sm:text-center md:text-start">
              Un frasco sagrado moldeado en base a un cáliz sagrado de oro , el
              cual fue bendecido por una lágrima sagrada. <br /> Lleno de
              lágrimas carmesí , este frasco restaura PS al usarlo. Descansa en
              un sitios de gracia para volverlo a llenar. <br /> El que fue
              arrastrado a la tundra estaba seguro de morir , hasta que este
              frasco ofreció su don de rejuvenecer . Para encontrar el Anillo de
              Elden .
            </p>

            <Link to="/objetos">
              <button className="my-5 w-[130px] cursor-pointer self-center justify-self-center bg-orange-red text-white">
                Leer más
              </button>
            </Link>
          </div>
        </div>

        <img
          src="/images/Decorations/middle.png"
          className="justify-self-center overflow-hidden sm:w-[500px] md:w-[600px] lg:w-[800px]"
        />

        <h2 className="pb-10 pt-20">Noticias</h2>
        <div className="mb-20 min-h-[330px] max-w-[760px] sm:flex sm:flex-col sm:items-center md:w-[725px] md:flex-row lg:w-[790px]">
          <div className="flex flex-col items-center justify-center border-2 border-light-yellow bg-dark-brown px-10 sm:w-[50%] md:w-[62%] lg:w-[60%]">
            <h3 className="my-5 self-start text-3xl">
              Más de 5 miliones de ventas
            </h3>
            <p className="m-0 text-start">
              Este hito es el resultado del tremendo apoyo de los fans de todo
              el mundo, a quienes expresamos nuestra más sincera gratitud. En
              esta expansión, los jugadores se adentran en un mundo lleno de
              misterios y peligros, plagado de jefes aún más peligrosos. <br />{' '}
              Shadow of the Erdtree trae una amplia gama de nuevos hechizos,
              armas y armaduras para que los jugadores creen sus configuraciones
              y superen desafíos a su manera.
            </p>
            <Link to="/noticias">
              <button className="mb-2 mt-5 w-[130px] cursor-pointer self-center justify-self-center bg-orange-red text-white">
                Más noticias
              </button>
            </Link>
          </div>
          <div className="flex h-max sm:w-[48%] md:w-[38%] lg:w-[40%]">
            <img
              className="min-h-[314px] object-cover"
              src="/images/News/news.png"
              alt="Frasco"
            />
          </div>
        </div>
      </div>
    </>
  )
}
