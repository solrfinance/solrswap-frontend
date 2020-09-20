import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useSolr from '../../hooks/useSolr'

// import { bnToDec } from '../../utils'
// import { getMasterChefContract, getEarned } from '../../../solr/utils'
import { getFarms } from '../../solr/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const solr = useSolr()
  const { account } = useWallet()

  const farms = getFarms(solr)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
