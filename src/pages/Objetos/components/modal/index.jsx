/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Modal({ modalContent, closeModal }) {
  return (
    <div>
      <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-70"></div>

      <div
        className="fixed inset-0 z-20 flex items-center justify-center"
        onClick={closeModal}
      >
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 flex h-8 w-8 scale-75 items-center justify-center font-della text-sm text-white hover:scale-[85%]"
        >
          X
        </button>
        <div
          className="bg-objmodal relative flex min-h-[500px] w-[800px] bg-[length:100%_100%]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex w-2/3 flex-col py-10 pl-16">
            <h2 className="my-5 pt-5 text-4xl">{modalContent.content.name}</h2>
            <p className="mb-0 whitespace-pre-line pr-5">
              {modalContent.content.description}
            </p>
            <h3 className="my-5 mb-0 text-lg">Efecto</h3>
            <p className="m-0 whitespace-pre-line pr-5">
              {modalContent.content.effect}
            </p>
            <h3 className="my-5 mb-0 text-lg">Localizacíon</h3>
            <p className="m-0 whitespace-pre-line pb-5 pr-5">
              {modalContent.content.location}
            </p>
          </div>

          <div className="flex w-2/5 items-center justify-center pr-10">
            <div className="flex items-center justify-center border-2 border-light-yellow bg-black">
              <img
                src={modalContent.content.img}
                alt="Imagem"
                className="w-[250px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
