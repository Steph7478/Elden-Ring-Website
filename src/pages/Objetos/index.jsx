/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react'
import Header from '../../components/common/header/header'
import { grandeRunas } from '../../components/data/Grande Runas'
import { lagrimasDeCristal } from '../../components/data/Lágrimas de cristal'
import { objetosDeMisiones } from '../../components/data/Objetos de Misiones'
import { useToggleModals } from '../../hooks/useToggleModals/index'
import Modal from './components/modal/index'

export default function Objetos() {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [])

  const { modal, modalContent, openModal, closeModal } = useToggleModals()

  return (
    <>
      {modal && <Modal modalContent={modalContent} closeModal={closeModal} />}
      <Header />
      <div className="h-[450px] w-full bg-obj1 bg-cover bg-center bg-no-repeat"></div>

      <div className="items-center justify-center bg-obj2 bg-center bg-no-repeat pt-20 text-center">
        <div className="overflow-hidden">
          <h2 className="pb-10 pt-10">Grandes runas</h2>
          <div className="flex max-w-[900px] flex-wrap justify-center gap-x-8 gap-y-5 justify-self-center">
            {grandeRunas.map((runas, index) => (
              <div key={index}>
                <img
                  src={runas.img}
                  alt=""
                  className={`h-40 w-40 cursor-pointer justify-self-center transition-transform duration-300 ${
                    index === 1 ? 'scale-[160%] pb-2' : ''
                  }`}
                  onClick={() => openModal(runas.name, runas, runas.img)}
                />
                <p className="m-0 w-[185px] justify-self-center font-dm-serif-display text-base text-light-yellow">
                  {runas.name}
                </p>
              </div>
            ))}
          </div>
          <button className="my-12 w-32 hover:cursor-not-allowed hover:bg-gray-600">
            Ver mas
          </button>
        </div>

        <img
          src="/public/images/Decorations/middle.png"
          className="justify-self-center overflow-hidden sm:w-[500px] md:w-[600px] lg:w-[800px]"
        />

        <div className="overflow-hidden">
          <h2 className="pb-10 pt-20">Lágrimas de cristal</h2>
          <div className="flex max-w-[900px] flex-wrap justify-center gap-x-10 gap-y-5 justify-self-center">
            {lagrimasDeCristal.map((lagrima, index) => (
              <div key={index}>
                <img
                  src={lagrima.img}
                  alt=""
                  className="h-40 w-40 cursor-pointer justify-self-center"
                  onClick={() => openModal(lagrima.name, lagrima, lagrima.img)}
                />
                <p className="m-0 w-[140px] justify-self-center font-dm-serif-display text-base text-light-yellow">
                  {lagrima.name}
                </p>
              </div>
            ))}
          </div>
          <button className="my-12 w-32 hover:cursor-not-allowed hover:bg-gray-600">
            Ver mas
          </button>
        </div>

        <img
          src="/public/images/Decorations/middle.png"
          className="justify-self-center overflow-hidden sm:w-[500px] md:w-[600px] lg:w-[800px]"
        />

        <div className="overflow-hidden">
          <h2 className="pb-10 pt-20">Objetos de misiones</h2>
          <div className="flex max-w-[900px] flex-wrap justify-center gap-x-10 gap-y-5 justify-self-center">
            {objetosDeMisiones.map((obj, index) => (
              <div key={index}>
                <img
                  src={obj.img}
                  alt=""
                  className="h-40 w-40 cursor-pointer justify-self-center"
                  onClick={() => openModal(obj.name, obj, obj.img)}
                />
                <p className="m-0 w-[190px] justify-self-center font-dm-serif-display text-base text-light-yellow">
                  {obj.name}
                </p>
              </div>
            ))}
          </div>
          <button className="my-12 w-32 hover:cursor-not-allowed hover:bg-gray-600">
            Ver mas
          </button>
        </div>
      </div>
    </>
  )
}
