import React, { useContext } from 'react'
import { HuobiIcon, UsdtIcon, OkIcon, BinanceIcon, SolrIcon, UniIcon, XSushiIcon, HptIcon } from '../icons'

interface IconfontProps {
    size?: number,
    icon: any 
  }
const IconSvg: React.FC<IconfontProps> = ({ icon, size = 24 }) => {
    switch (icon) {
        case 'ok':
            return <OkIcon size={size}></OkIcon>;
        case 'ht':
            return <HuobiIcon size={size}></HuobiIcon>;
        case 'hpt':
            return <HptIcon size={size}></HptIcon>;
        case 'usdt':
            return <UsdtIcon size={size}></UsdtIcon>;
        case 'binance':
            return <BinanceIcon size={size}></BinanceIcon>;
        case 'solr':
            return <SolrIcon size={size}></SolrIcon>;
        case 'uni':
            return <UniIcon size={size}></UniIcon>;
        case 'xsushi':
            return <XSushiIcon size={size}></XSushiIcon>;
        default:
            return <SolrIcon size={size}></SolrIcon>;

    }
}

export default IconSvg