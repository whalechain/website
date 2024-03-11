import IceChain from '../ice-chain'

const whalechianExplorer = { name: 'Explorer', url: 'https://explorer.whalechain.live' }

export const whalechain: IceChain = {
  id: 370,
  name: 'WhaleChain Mainnet',
  features: ['bridge'],
  network: 'whalechain',
  rpcUrls: {
    public: { http: ['https://testnet.whalechain.live'] },
    default: { http: ['https://testnet.whalechain.live'] },
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
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 15921452,
    },
  },
  wrappedNative: {
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    decimals: 18,
    symbol: 'WBNB',
    name: 'Wrapped BNB',
  },
}
