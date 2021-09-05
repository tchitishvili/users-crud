import { StyledModal, StyledOverlay, StyledModalClose, StyledModalTitle, StyledModalContent, StyledModalContentInner } from './styled'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

function Modal({ onClick, onClose, width = '500px', title, children }) {
  const [modalVisible, setModalVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    if (!modalVisible) {
      document.body.style.overflow = 'auto'
    }
  }, [modalVisible])

  if (!modalVisible) return null

  return createPortal(
    <>
      <StyledOverlay
        onClick={() => {
          setModalVisible(false)
          if (onClose) {
            onClose()
          }
        }}
      ></StyledOverlay>
      <StyledModal modalWidth={width}>
        <StyledModalClose
          onClick={() => {
            setModalVisible(false)
            if (onClose) {
              onClose()
            }
          }}
        >
          &#x2715;
        </StyledModalClose>
        <StyledModalTitle>{title}</StyledModalTitle>
        <StyledModalContent>
          <StyledModalContentInner>{children}</StyledModalContentInner>
        </StyledModalContent>
      </StyledModal>
    </>,
    document.body,
  )
}

export default Modal
