import {Address} from "viem";

const chains = [
  {
    domainId: 1,
    networkId: 370,
    name: 'WhaleChain',
    decimals: 18,
    bridgeAddress: '0xBE043B3C59aFD46Cce1A28Dafde8202f643f6CEe' as Address,
    rpcUrl: 'https://rpc.whalechain.live',
    type: 'Ethereum',
    nativeTokenSymbol: 'WHALE',
    tokens: [
      {
        address: '0x0000000000000000000000000000000000000001' as Address,
        name: 'WhaleChain Native Token',
        symbol: 'WHALE',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
    ],
  },
  {
    domainId: 2,
    networkId: 372,
    name: 'FortressChain',
    decimals: 18,
    bridgeAddress: '0xBE043B3C59aFD46Cce1A28Dafde8202f643f6CEe' as Address,
    rpcUrl: 'https://rpc.fortresschain.finance',
    type: 'Ethereum',
    nativeTokenSymbol: 'FTSC',
    tokens: [
      {
        address: '0x0000000000000000000000000000000000000001' as Address,
        name: 'FortressChain Native Token',
        symbol: 'FTSC',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
    ],
  },
]

export type BridgeChain = typeof chains[number]
export type TokenConfig = BridgeChain['tokens'][number]

export const bridgeChains = chains as BridgeChain[]
