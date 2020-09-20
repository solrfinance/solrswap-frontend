import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../solr/utils'
import useSolr from './useSolr'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const solr = useSolr()
  const masterChefContract = getMasterChefContract(solr)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, solr])

  useEffect(() => {
    if (account && masterChefContract && solr) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, solr])

  return balance
}

export default useEarnings
