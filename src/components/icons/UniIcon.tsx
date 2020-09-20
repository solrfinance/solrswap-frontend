import React from 'react'
import uniImage from '../../assets/img/uni.png'

import { IconProps } from '../Icon'

const UniIcon: React.FC<IconProps> = ({ size = 24 }) => {
    return (
        <img src={uniImage} width={size} height={size} />
    )
}

export default UniIcon