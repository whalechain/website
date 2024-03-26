import {Address} from "viem";

const chains = [
  {
    domainId: 1,
    networkId: 56,
    name: 'WhaleChain',
    decimals: 18,
    bridgeAddress: '0xBE043B3C59aFD46Cce1A28Dafde8202f643f6CEe' as Address,
    rpcUrl: 'https://rpc.whalechain.live',
    type: 'Ethereum',
    nativeTokenSymbol: 'WHALE',
    tokens: [
      {
        address: '0xce6c9c70f91c6797873EFC80505f972290A88f5D' as Address,
        name: 'IceCream',
        symbol: 'ICE',
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
