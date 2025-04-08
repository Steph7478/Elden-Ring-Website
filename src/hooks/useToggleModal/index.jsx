/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

export function useToggleModal() {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

  return { modal, toggleModal }
}
