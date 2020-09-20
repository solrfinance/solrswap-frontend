import { useCallback } from 'react'

import useSolr from './useSolr'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../solr/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const solr = useSolr()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(solr),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, solr],
  )

  return { onStake: handleStake }
}

export default useStake
