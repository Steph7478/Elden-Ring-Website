/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { cardData } from '../../../../components/data/Personajes'

export default function Modal({ toggleModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-70"></div>

      <div
        className="fixed inset-0 z-20 flex items-center justify-center"
        onClick={toggleModal}
      >
        <div
          className="relative flex h-[530px] w-[650px] items-center justify-center bg-pjmodal bg-[length:100%_100%] bg-center bg-no-repeat"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-2 top-2 flex h-8 w-8 scale-75 items-center font-della text-sm text-white hover:scale-[85%]"
            onClick={toggleModal}
          >
            X
          </button>

          <div className="grid grid-cols-3 grid-rows-3 gap-x-10 gap-y-4">
            {cardData.map((character, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center ${index === 6 ? 'col-span-3' : ''}`}
              >
                <img
                  src={character.img}
                  alt=""
                  className="h-[100px] w-[100px]"
                />
                <span
                  className={`w-[115px] max-w-full text-center font-dm-serif-display text-sm text-light-yellow`}
                >
                  {character.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
