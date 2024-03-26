import IceChain from '../ice-chain'

export const core: IceChain = {
  id: 370,
  name: 'WhaleChain Mainnet',
  features: ['swap', 'bridge'],
  // features: ['swap', 'swapV3', 'bridge', 'farms', 'farmsV3', 'locks', 'staking', 'info', 'kyc', 'launchpad', 'tokenDeployer'],
  network: 'whalechain',
  rpcUrls: {
    public: { http: ['https://rpc.whalechain.live'] },
    default: { http: ['https://rpc.whalechain.live'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.whalechain.live' },
  },
  nativeCurrency: {
    name: 'WhaleChain Native Token',
    symbol: 'WHALE',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x58374895C079aDC356f90D3C45e0d07296B6c2F2',
      blockCreated: 19516,
    },
  },
  tokenDeployerDividend: {
    address: '0x5c39F20A0d75Cc8695cfBa8d97178aB64e60d848',
    feeToken: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
  },
  locks: {
    factoryAddress: '0xFDfD00471d8bebA97B40f5D1599b7A84C16dd7d2',
    factoryAddress2: '0xA48E76d95619f4c9838Df19FDeE690a06581b5dD',
  },
  blockInterval: 3,
  wrappedNative: {
    address: '0x328b61E6e1d94bA83A0cb44163932B3cd30BC155',
    decimals: 18,
    symbol: 'wWHALE',
    name: 'Wrapped WHALE',
  },
  swap: {
    factoryAddress: '0x957A89f276D0D965C6Ed9dd9EE24c5e69D79D0B0',
    routerAddress: '0xf03e3c32b1DF8A07BAC7A9fb1a584049D8A1c562',
    initCodeHash: '0x0168a4c1cffa0b0cba36f7e25f59660fa88c981095ca7dd04b93a8b93757392e',
  },
  campaignFactory: '0x79218D6d562a435ec258f2f4D8D17f1DEbbb114a',
  kyc: {
    feeToken: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
    fee: 10,
    feeWallet: '0x2Bfd1fc5e25a8F55C2E849492ad7966EA8A0dd9E',
    contractKyced: '0x913E332d552b98355587BBa82b1256BCAdbCeD48',
    contractKycDelegator: '0x682EAb822E5896dF1cD33C1Cd6EE99a3154Dd47E',
    contractKycDelegations: '0x790C138B110Bfb517cE5FaB8CF1a51ffDaAa9754',
  },
  v3SubgraphStart: 9212906,
}
