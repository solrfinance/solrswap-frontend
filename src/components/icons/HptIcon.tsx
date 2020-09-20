import React, { useContext } from 'react'
import hptImage from '../../assets/img/hpt.png'

import { IconProps } from '../Icon'

const HptIcon: React.FC<IconProps> = ({ size = 24 }) => {
    return (
        <img src={hptImage} width={size} height={size} />
    )
}

export default HptIcon