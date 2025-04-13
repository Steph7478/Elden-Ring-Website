/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

export const useToggleModals = () => {
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
    imgSrc: '',
  })

  const openModal = (title, content, imgSrc) => {
    setModalContent({ title, content, imgSrc })
    setModal(true)
    document.documentElement.classList.add('overflow-hidden')
  }

  const closeModal = () => {
    setModal(false)
    document.documentElement.classList.remove('overflow-hidden')
  }

  return { modal, modalContent, openModal, closeModal }
}
