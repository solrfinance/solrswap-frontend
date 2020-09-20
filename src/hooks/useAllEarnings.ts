import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../solr/utils'
import useSolr from './useSolr'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const solr = useSolr()
  const farms = getFarms(solr)
  const masterChefContract = getMasterChefContract(solr)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, solr])

  useEffect(() => {
    if (account && masterChefContract && solr) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, solr])

  return balances
}

export default useAllEarnings
