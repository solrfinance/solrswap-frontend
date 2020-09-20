import { useContext } from 'react'
import { Context } from '../contexts/SolrProvider'

const useSolr = () => {
  const { solr } = useContext(Context)
  return solr
}

export default useSolr
