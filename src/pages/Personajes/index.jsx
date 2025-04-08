/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from '../../components/common/header/header'
import Cards from './components/cards/index'
import { useToggleModal } from '../../hooks/useToggleModal'
import Modal from './components/modal'

export default function Personajes() {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [])

  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character)
  }

  const { modal, toggleModal } = useToggleModal()

  return (
    <>
      <Header />
      <div className="flex max-h-[500px] w-full items-center justify-center bg-pj1 bg-cover bg-center">
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <Cards onCharacterSelect={handleCharacterSelect} />
        </div>
      </div>
      <div className="flex min-h-[1000px] flex-col items-center justify-between bg-pj2 bg-cover bg-center pb-20">
        <div className="flex h-auto w-2/3 flex-col items-center text-center">
          <h2 className="pt-7">{selectedCharacter?.name || ''}</h2>
          <img
            src="/src/assets/images/Decorations/guidedec.png"
            alt="#"
            className="h-auto w-32 pb-10 pt-5"
          />
          <p className="w-5/6 text-sm">
            {selectedCharacter?.description?.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <button onClick={toggleModal}>Ver todos los personajes</button>
        {modal && <Modal toggleModal={toggleModal} />}
      </div>
    </>
  )
}
