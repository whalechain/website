import IceChain from '../ice-chain'

const fortresschainExplorer = { name: 'Explorer', url: 'https://explorer.fortresschain.finance' }

export const fortresschain: IceChain = {
  id: 372,
  name: 'FortressChain Mainnet',
  features: [],
  network: 'FortressChain',
  rpcUrls: {
    public: { http: ['https://rpc.fortresschain.finance'] },
    default: { http: ['https://rpc.fortresschain.finance'] },
  },
  blockExplorers: {
    default: fortresschainExplorer,
    etherscan: fortresschainExplorer,
  },
  nativeCurrency: {
    name: 'FortressChain Native Token',
    symbol: 'FTSC',
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
    symbol: 'WFTSC',
    name: 'Wrapped FortressChain',
  },
}
