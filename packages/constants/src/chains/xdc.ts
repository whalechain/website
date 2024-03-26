import { FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS } from "../common/swap";
import IceChain from '../ice-chain'

export const xdc: IceChain = {
  id: 50,
  name: 'XDC Network',
  features: [],
  network: 'xdc',
  rpcUrls: {
    public: { http: ['https://erpc.xinfin.network'] },
    default: { http: ['https://erpc.xinfin.network'] },
  },
  blockExplorers: {
    default: { name: 'XDC Explorer', url: 'https://xdcscan.io' },
  },
  nativeCurrency: {
    name: 'XDC',
    symbol: 'XDC',
    decimals: 18,
  },
  blockInterval: 2,
  contracts: {
    multicall3: {
      address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
      blockCreated: 53792616,
    },
  },
  locks: {
    factoryAddress: '0xE4d6908351B613143AF81aaC6e34Eaa4b72acF5B',
  },
  wrappedNative: {
    address: '0x951857744785E80e2De051c32EE7b25f9c458C42',
    decimals: 18,
    symbol: 'WXDC',
    name: 'Wrapped XDC',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    routerAddress: ROUTER_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
  kyc: {
    feeToken: '0x54051D9DbE99687867090d95fe15C3D3E35512Ba',
    fee: 10,
    feeWallet: '0x2Bfd1fc5e25a8F55C2E849492ad7966EA8A0dd9E'
  },
}
