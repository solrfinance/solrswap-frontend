import { useCallback } from 'react'

import useSolr from './useSolr'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../solr/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const solr = useSolr()
  const masterChefContract = getMasterChefContract(solr)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, solr])

  return { onReward: handleReward }
}

export default useReward
