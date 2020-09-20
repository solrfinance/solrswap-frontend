import React from 'react'
import xSushiImage from '../../assets/img/sushi.png'

import { IconProps } from '../Icon'

const xSushiIcon: React.FC<IconProps> = ({ size = 24 }) => {
    return (
        <img src={xSushiImage} width={size} height={size} />
    )
}

export default xSushiIcon