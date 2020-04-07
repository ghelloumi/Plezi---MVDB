import React, { useEffect, useRef } from 'react'
import Image from './Image'
import { ALTS, IMAGES } from '../../utils/contants'
import PropTypes from 'prop-types'

const Modal = ({ children, close }) => {
  const modalContainer = useRef(null)
  const modalContainerClose = useRef(null)

  const handleCloseModal = () => {
    close()
  }

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (modalContainer.current && modalContainerClose.current) {
        if (
          !modalContainer.current.contains(e.target) ||
          modalContainerClose.current.childNodes[ 0 ] === e.target
        ) {
          handleCloseModal()
        }
      }
    })
    return () => {
      window.removeEventListener('click', null)
    }
  })

  return (
      <div className="modal">
          <div className="modal__container" ref={ modalContainer }>
              <div className="modal__container__close" ref={ modalContainerClose }>
                  <Image
            src={ IMAGES.close }
            alt={ ALTS.CLOSE_MODEL_ALT }
            onClick={ handleCloseModal }
          />
              </div>
              <div className="modal__container__content">{children}</div>
          </div>
      </div>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
  close: PropTypes.func.isRequired,
}

export default Modal
