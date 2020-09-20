import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  solr: {
    1: '0xe67d73ca320f9922922faa49863b606081ae3e88',
  },
  masterChef: {
    1: '0xf24aAC4F21A146283282AA7B49227ECC0Fec3fcE',
  },
  // weth: {
  //   1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  // },
}

/*
UNI-V2 Deposit Address on mainnet for reference
==========================================
0 UNI     0x1f9840a85d5af5bf1d1762f925bdaddc4201f984  18
1 xSUSHI  0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272  18
2 HT      0x6f259637dcd74c767781e37bc6133cd6a68aa161  18
3 HPT     0xa66daa57432024023db65477ba87d4e7f5f95213  18
4 OKB     0x75231f58b43240c9718dd58b4967c5114342a86c  18
*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    name: 'UNI Deposit',
    symbol: 'UNI',
    icon: 'uni',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
    },
    tokenAddresses: {
      1: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
    },
    name: 'xSUSHI Deposit',
    symbol: 'xSUSHI',
    icon: 'xsushi',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
    },
    tokenAddresses: {
      1: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
    },
    name: 'HT Deposit',
    symbol: 'HT',
    icon: 'ht',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xa66daa57432024023db65477ba87d4e7f5f95213',
    },
    tokenAddresses: {
      1: '0xa66daa57432024023db65477ba87d4e7f5f95213',
    },
    name: 'HPT Deposit',
    symbol: 'HPT',
    icon: 'hpt',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0x75231f58b43240c9718dd58b4967c5114342a86c',
    },
    tokenAddresses: {
      1: '0x75231f58b43240c9718dd58b4967c5114342a86c',
    },
    name: 'OKB Deposit',
    symbol: 'OKB',
    icon: 'ok',
  }
]
