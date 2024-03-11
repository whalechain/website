import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const shimmerTestnetTokens = {
  wsmr: WETH9[ChainId.SHIMMER_TEST],
  ice: new ERC20Token(ChainId.SHIMMER_TEST, '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),
  usdt: new ERC20Token(ChainId.SHIMMER_TEST, '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44', 18, 'USDT', 'Tether USD'),
}
