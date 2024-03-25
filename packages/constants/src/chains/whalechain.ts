import IceChain from '../ice-chain'

const whalechianExplorer = { name: 'Explorer', url: 'https://explorer.whalechain.live' }

export const whalechain: IceChain = {
  id: 370,
  name: 'WhaleChain Mainnet',
  features: ['swap'],
  network: 'whalechain',
  rpcUrls: {
    public: { http: ['https://rpc.whalechain.live'] },
    default: { http: ['https://rpc.whalechain.live'] },
  },
  blockExplorers: {
    default: whalechianExplorer,
    etherscan: whalechianExplorer,
  },
  nativeCurrency: {
    name: 'WhaleChain Native Token',
    symbol: 'WHALE',
    decimals: 18,
  },
  blockInterval: 3,
  contracts: {
    multicall3: {
      address: '0x58374895C079aDC356f90D3C45e0d07296B6c2F2',
      blockCreated: 19516,
    },
  },
  wrappedNative: {
    address: '0x328b61E6e1d94bA83A0cb44163932B3cd30BC155',
    decimals: 18,
    symbol: 'wWHALE',
    name: 'Wrapped WHALE',
  },
}
