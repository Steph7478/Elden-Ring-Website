/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Modal({ modalContent, closeModal }) {
  const imgClass =
    modalContent.imgSrc === '/images/Guides/gopen3.jpg' ||
    modalContent.imgSrc === '/images/Guides/gopen4.jpg'
      ? 'object-center'
      : 'object-bottom'

  return (
    <div>
      <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-70"></div>

      <div
        className="fixed inset-0 z-20 flex w-full items-center justify-center"
        onClick={closeModal}
      >
        <div
          className="relative flex h-[580px] w-[750px] flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="absolute right-2 top-2 flex h-8 w-8 scale-75 items-center justify-center font-della text-sm text-white hover:scale-[85%]"
          >
            X
          </button>

          <div className="flex h-full w-full flex-col">
            {modalContent.imgSrc && (
              <div className="h-[30%] w-full">
                <img
                  src={modalContent.imgSrc}
                  alt="Guia"
                  className={`h-full w-full object-cover ${imgClass}`}
                />
              </div>
            )}

            <div className="flex h-[70%] w-full flex-col justify-between bg-guidemodal bg-[length:100%_100%] bg-center bg-no-repeat px-6 text-center">
              <h2 className="m-0 py-5 text-4xl font-bold">
                {modalContent.title}
              </h2>
              <p className="m-0 flex-1 overflow-y-auto px-8 text-sm">
                {modalContent?.content?.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </p>

              <div>
                <button className="mb-4 w-[230px] hover:cursor-not-allowed hover:bg-gray-600">
                  Leer la guía completa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
