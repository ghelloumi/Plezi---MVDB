import React from 'react'
import { ALTS, IMAGES, TEXTS } from '../../utils/contants'
import Image from '../atoms/Image'

const AppHeader = () => {
  return (
      <div className="app__header">
          <span>{TEXTS.APP_TITLE} </span>
          <Image src={ IMAGES.logo } alt={ ALTS.LOGO_ALT } />
      </div>
  )
}

export default AppHeader
