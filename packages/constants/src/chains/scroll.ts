import {FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS} from '../common/swap'
import IceChain from '../ice-chain'

export const scroll: IceChain = {
  id: 534352,
  name: 'Scroll',
  features: ['swap', 'bridge', 'farms', 'kyc', 'info'],
  network: 'scroll',
  rpcUrls: {
    public: { http: ['https://rpc.scroll.io'] },
    default: { http: ['https://rpc.scroll.io'] },
  },
  blockExplorers: {
    default: { name: 'Scroll Explorer', url: 'https://scrollscan.com/' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
      blockCreated: 85060,
    },
  },
  blockInterval: 3,
  wrappedNative: {
    address: '0x5300000000000000000000000000000000000004',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    routerAddress: ROUTER_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
  kyc: {
    feeToken: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
    fee: 10,
    feeWallet: '0x2Bfd1fc5e25a8F55C2E849492ad7966EA8A0dd9E'
  },
}
