import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../solr/utils'
import useSolr from './useSolr'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const solr = useSolr()
  const masterChefContract = getMasterChefContract(solr)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, solr])

  useEffect(() => {
    if (account && solr) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, solr])

  return balance
}

export default useStakedBalance
