import React, { useContext } from 'react'
import Binance from '../../assets/svg/binance.svg'

import { IconProps } from '../Icon'

const BinanceIcon: React.FC<IconProps> = ({ size = 24 }) => {
    return (
        <img src={Binance} width={size} height={size} />
        // <svg viewBox="0 0 1024 1024" version="1.1" width={size} height={size}>
        //     <g>
        //         <rect x="42.6" y="42.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.7656 50.0225)" fill="#F3BA2E;" width="14.7" height="14.7" />
        //         <polygon fill="#F3BA2E;" points="50,25.5 67.5,43 77.7,32.7 50,5 22.3,32.7 32.5,43 	" />
        //         <rect x="8" y="42.8" transform="matrix(0.7073 -0.7069 0.7069 0.7073 -30.9636 25.3812)" fill="#F3BA2E;" width="14.3" height="14.5" />
        //         <polygon fill="#F3BA2E;" points="50,74.8 32.4,57.3 22.3,67.3 50,95 77.7,67.3 67.6,57.3 	" />

        //         <rect x="77.6" y="42.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.5629 74.6565)" fill="#F3BA2E;" width="14.5" height="14.3" />
        //     </g>
        // </svg>
    )
}

export default BinanceIcon