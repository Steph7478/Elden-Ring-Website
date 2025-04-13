/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect } from 'react'
import Header from '../../components/common/header/header'
import { useToggleModals } from '../../hooks/useToggleModals/index'
import Modal from './components/modal'

export default function Guias() {
  const { modal, modalContent, openModal, closeModal } = useToggleModals()

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [])

  return (
    <>
      {modal && <Modal modalContent={modalContent} closeModal={closeModal} />}
      <Header />
      <div className="h-[500px] w-full bg-guide1 bg-cover bg-center"></div>
      <div className="flex h-full w-full flex-col items-center overflow-hidden bg-guide2 bg-cover bg-center">
        <div className="mt-20 flex w-2/3 flex-col items-center justify-center text-center">
          <h2>Convíertete en el Señor del Elden</h2>
          <p className="mt-10 h-full w-3/4">
            Elden Ring nos presenta una historia muy distinta a lo que cualquier
            jugador de un Souls espera. En esta ocasión, tienes un mapa
            completamente abierto , con montones de opciones a la hora de
            explorar. <br /> El juego puede completarse prácticamente en
            cualquier orden , por lo que contar con algo de ayuda no estará de
            más. A lo largo de este conjunto de guías te mostraremos todos los
            secretos e información necesaria para poder tener la mejor
            experiencia pasándote el juego. Estas guías están creadas para
            jugadores de todos los niveles , desde los más nuevos , hasta los
            más experimentados. Esperamos que puedas encontrar toda la
            información que necesitas en todas y cada una de ellas.
          </p>
          <img
            src="/public/images/Decorations/guidedec.png"
            alt="Decoração"
            className="my-5 h-auto w-32"
          />
        </div>

        <div className="mb-10 mt-5 grid min-h-[1000px] w-[950px] items-center justify-center justify-items-center sm:flex sm:flex-col sm:gap-y-20 lg:grid lg:grid-cols-2 lg:grid-rows-3">
          <div className="text-center">
            <img
              src="/public/images/Guides/g1.jpg"
              alt="Guia 1"
              loading="lazy"
              className="col-start-1 row-start-1 mb-5 h-auto w-[400px] cursor-pointer"
              onClick={() =>
                openModal(
                  'Cómo iniciar tu aventura',
                  'La primera vez que salgas a la zona inicial de Necrolimbo (tras escoger tu clase inicial y objeto inicial) toda la región estará abierta para explorarla: podrás descubrir cuevas con breves pero desafiantes mazmorras, te asaltarán dragones o te enfrentarás a trolls que patrullan por la zona.\n El juego te indica un destino al que deberás ir como parte de la historia, pero no tienes por qué ir allí inmediatamente. De hecho, te recomendamos activamente no ir en un primer momento. En vez de eso, tómate tu tiempo para comprender cómo funciona este mundo y para subir de nivel a tu personaje. in embargo, ahora que sabes dónde está, te recomendamos que resistas la tentación de ir allí. En esa dirección encontrarás algunas mejoras esenciales que te interesará recoger, pero llegar al propio Castillo no es recomendable hasta que lleves unas horas de juego.',
                  '/public/images/Guides/gopen1.jpg'
                )
              }
            />
            <span className="font-dm-serif-display text-2xl text-light-yellow">
              Cómo iniciar tu aventura
            </span>
          </div>

          <div className="text-center">
            <img
              src="/public/images/Guides/g2.jpg"
              alt="Guia 2"
              loading="lazy"
              className="col-start-1 row-start-1 mb-5 h-auto w-[400px] cursor-pointer"
              onClick={() =>
                openModal(
                  'Descubre todos los finales',
                  'Elden Ring es bastante complejo a la hora de obtener todos los finales. Aquí puedes conseguir varios, y aunque el primero de ellos se saca de manera automática, hay muchas cosas que debes saber sobre los demás. Por eso, en esta parte de nuestra guía completa vamos a explicarte todo lo que debes saber antes de intentar desbloquear uno. Además, te ofrecemos artículos dedicados a cada uno de ellos.\n Elden Ring tiene 3 finales principales, además de otras variantes. Es decir, conseguir el platino del juego exige desbloquear los finales que aparecen en los trofeos y logros: Señor del Círculo, Era de las Estrellas y Señor de la Llama Frenética.\n En las siguientes guías te contamos paso a paso todo lo que debes hacer para preparar el camino hacia cada final. Además, te decimos cuándo y dónde comienza cada misión.',
                  '/public/images/Guides/gopen2.jpg'
                )
              }
            />
            <span className="font-dm-serif-display text-2xl text-light-yellow">
              Descubre todos los finales
            </span>
          </div>

          <div className="text-center">
            <img
              src="/public/images/Guides/g3.jpg"
              alt="Guia 3"
              loading="lazy"
              className="col-start-1 row-start-1 mb-5 h-auto w-[400px] cursor-pointer"
              onClick={() =>
                openModal(
                  'Todo sobre las missiones secundarias',
                  'Al estilo de cualquier otro juego del Soulsverse, Elden Ring nos ofrece la posibilidad de interactuar con decenas de NPCs. En algunos casos, estos personajes tienen misiones o quests relacionadas, con las que podremos conseguir recompensas especiales. En esta sección os mostraremos a todos los NPCs, las misiones relacionadas y las mejores recompensas de ellas.\n Debido a la naturaleza de Elden Ring, es casi imposible saber si podrás o no completar misiones de NPCs una vez hayas avanzado demasiado en el juego.\n El motivo es que hay infinidad de triggers o eventos para cada misión, que van desde haber llegado a un determinado Lugar de gracia, derrotar a tal o cuál jefe. Cuadrar todas estas variables con tu partida es virtualmente imposible. Sin embargo, nuestra guía optimizada de la Historia está diseñada para cumplir la mayoría de misiones o al menos, las más relevantes.',
                  '/public/images/Guides/gopen3.jpg'
                )
              }
            />
            <span className="font-dm-serif-display text-2xl text-light-yellow">
              Todo sobre las missiones secundarias
            </span>
          </div>

          <div className="text-center">
            <img
              src="/public/images/Guides/g4.jpg"
              alt="Guia 4"
              loading="lazy"
              className="col-start-1 row-start-1 mb-5 h-auto w-[400px] cursor-pointer"
              onClick={() =>
                openModal(
                  'Todo sobre New Game',
                  'Te contamos cómo funciona el Postgame de Elden Ring, cómo empezar una partida en NG+ y, además, despejamos cualquier asunto pendiente que quedara durante la primera partida.\n Tras termina la historia de Elden Ring, aún hay mucho que podemos hacer. Aquí te vamos a ayudar a completar del todo la primera partida, así como explicarte cómo funcionan el postgame y el NG+.\n Es importante saber que el juego nunca te obliga a pasar al modo NG+. Una vez eliges ver un final y terminas de ver los créditos, aparecerá una opción que te permite saltar a la segunda vuelta o quedarte en tu partida actual. Si te quedas, en cualquier momento puedes empezar el NG+ a través de la nueva Gracia que ha aparecido en la Mesa Redonda (está justamente sobre la mesa de la habitación inicial).',
                  '/public/images/Guides/gopen4.jpg'
                )
              }
            />
            <span className="font-dm-serif-display text-2xl text-light-yellow">
              Lo que debes saber de New Game
            </span>
          </div>

          <div className="col-span-2 text-center">
            <img
              src="/public/images/Guides/g5.jpg"
              alt="Guia 5"
              loading="lazy"
              className="col-start-1 row-start-1 mb-5 h-auto w-[400px] cursor-pointer"
              onClick={() =>
                openModal(
                  'Descubre todos los secretos',
                  'Un juego tan vasto como Elden Ring está lleno de secretos y peligros, como nos tiene acostumbrados FromSoftware. Aunque en esta ocasión elevados al cubo debido precisamente a ese mundo abierto de dimensiones tan amplias. Por ello tienes a tu disposición esta guía de Elden Ring donde trataremos cada detalle.\n Ayuda que hayas jugado a cualquier Dark Souls o Bloodborne, pero eso no significa que puedas llegar a esta nueva obra maestra de Hidetaka Miyazaki plenamente confiado. Es un maestro del troleo y de sorprenderte cuando menos te lo esperas, debido a ello es que a lo largo de nuestra guía te lo contaremos todo sobre cómo completar el juego al 100% en una sola pasada, así como nuestros consejos para derrotar a todos los jefes, conseguir todas las armas, conseguir los hechizos más poderosos y más, mucho más. Hay mucha información dentro de esta guía así que prepárate, porque va a ser un viaje movido.',
                  '/public/images/Guides/gopen5.jpg'
                )
              }
            />
            <span className="font-dm-serif-display text-2xl text-light-yellow">
              Descubre todos los secretos
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
