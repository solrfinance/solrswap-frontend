import { useCallback } from 'react'

import useSolr from './useSolr'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../solr/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const solr = useSolr()
  const masterChefContract = getMasterChefContract(solr)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, solr],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
