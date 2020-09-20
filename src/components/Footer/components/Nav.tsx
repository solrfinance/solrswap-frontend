import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xf24aAC4F21A146283282AA7B49227ECC0Fec3fcE"
      >
        Contract
      </StyledLink>
      {/* <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        Uniswap SOLR-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="https://github.com/solrfinance/solrswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/solrfinanceofficial">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@solrfinance">
        Medium
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/solrfinance">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
