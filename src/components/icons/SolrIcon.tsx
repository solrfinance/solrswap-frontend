import React, { useContext } from 'react'
import Solr from '../../assets/img/chef.png'
// import { ThemeContext } from 'styled-components'

import { IconProps } from '../Icon'

const SolrIcon: React.FC<IconProps> = ({ size = 24 }) => {
    // const { color: themeColor } = useContext(ThemeContext)
    return (
        <img src={Solr} width={size} height={size} />
        // <svg version="1.1" x="0px" y="0px" width={size} height={size}
        //     viewBox="0 0 100 100" >
        //     <g>
        //         <g>
        //             <path fill="#FFD05B;" d="M76.9,42c-0.6-1.9-1.3-3.7-2.2-5.4C72,31.9,68.1,28,63.4,25.4c-1.7-0.9-3.5-1.7-5.4-2.2
		// 	c-2.5-0.8-5.2-1.1-8-1.1c-2.8,0-5.4,0.4-8,1.1c-1.9,0.6-3.7,1.3-5.4,2.2h0C31.9,28,28,31.9,25.4,36.6c-0.9,1.7-1.7,3.5-2.2,5.4
		// 	c-0.7,2.5-1.2,5.2-1.2,8s0.4,5.4,1.2,8c0.6,1.9,1.3,3.7,2.2,5.4c2.6,4.8,6.5,8.7,11.3,11.3h0c1.7,0.9,3.5,1.7,5.4,2.2
		// 	c2.5,0.8,5.2,1.2,8,1.2c2.8,0,5.4-0.4,8-1.2c1.9-0.6,3.7-1.3,5.4-2.2c4.8-2.6,8.7-6.5,11.3-11.3c0.9-1.7,1.7-3.5,2.2-5.4
		// 	c0.8-2.5,1.2-5.2,1.2-8S77.6,44.6,76.9,42z M45.8,66.6L48,51.3h-8.1l14.2-17.9L52,48.7h8.1L45.8,66.6z"/>
        //             <g>
        //                 <path fill="#FFD05B;" d="M50,18.2c-2.1,0-4.1,0.2-6,0.6L50,5l6,13.8C54.1,18.4,52.1,18.2,50,18.2z" />
        //                 <path fill="#FFD05B;" d="M50,81.8c2.1,0,4.1-0.2,6-0.6L50,95l-6-13.8C45.9,81.6,47.9,81.8,50,81.8z" />
        //             </g>
        //             <g>
        //                 <path fill="#FFD05B;" d="M23.6,32.2l-5.5-14l14,5.5C28.8,25.9,25.9,28.8,23.6,32.2z" />
        //                 <path fill="#FFD05B;" d="M81.8,81.8l-14-5.5c3.4-2.3,6.3-5.2,8.5-8.5L81.8,81.8z" />
        //             </g>
        //             <g>
        //                 <path fill="#FFD05B;" d="M18.8,44c-0.4,2-0.6,4-0.6,6c0,2.1,0.2,4.1,0.6,6L5,50L18.8,44z" />
        //                 <path fill="#FFD05B;" d="M81.2,56c0.4-2,0.6-4,0.6-6c0-2.1-0.2-4.1-0.6-6L95,50L81.2,56z" />
        //             </g>
        //             <g>
        //                 <path fill="#FFD05B;" d="M32.2,76.4l-14,5.5l5.5-14C25.9,71.2,28.8,74.1,32.2,76.4z" />
        //                 <path fill="#FFD05B;" d="M81.8,18.2l-5.5,14c-2.3-3.4-5.2-6.3-8.5-8.5L81.8,18.2z" />
        //             </g>
        //         </g>
        //     </g>
        // </svg>
    )
}

export default SolrIcon