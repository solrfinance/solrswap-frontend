import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Solr } from '../../solr'

export interface SolrContext {
  solr?: typeof Solr
}

export const Context = createContext<SolrContext>({
  solr: undefined,
})

declare global {
  interface Window {
    solrsauce: any
  }
}

const SolrProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [solr, setSolr] = useState<any>()

  // @ts-ignore
  window.solr = solr
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const solrLib = new Solr(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setSolr(solrLib)
      window.solrsauce = solrLib
    }
  }, [ethereum])

  return <Context.Provider value={{ solr }}>{children}</Context.Provider>
}

export default SolrProvider
