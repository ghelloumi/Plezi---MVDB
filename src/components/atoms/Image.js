import React from 'react'
import { IMAGES } from '../../utils/contants'
import PropTypes from 'prop-types'

const Image = ({ src, alt, onClick }) => {
  const onError = (e) => {
    e.target.src = IMAGES.imageNotFound
  }

  return <img src={ src } alt={ alt } onError={ onError } onClick={ onClick } />
}

Image.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Image
