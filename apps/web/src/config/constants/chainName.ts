import { ChainId } from '@pancakeswap/sdk'

const chainName: Record<ChainId, string> = {
  // [ChainId.BITGERT]: 'Bitgert',
  // [ChainId.SHIMMER]: 'Shimmer EVM',
  // [ChainId.DOGE]: 'Doge',
  // [ChainId.DOKEN]: 'Doken',
  // [ChainId.FUSE]: 'Fuse',
  // [ChainId.XDC]: 'XDC',
  [ChainId.BSC]: 'Binance',
  [ChainId.WHALECHAIN]: 'WhaleChain',
  // [ChainId.CORE]: 'CORE',
  // [ChainId.XODEX]: 'XODEX',
  // [ChainId.SHARDEUM_TEST]: 'Shardeum (Testnet)',
  // [ChainId.TELOS]: 'Telos',
  // [ChainId.SHIMMER_TEST]: 'Shimmer (Testnet)',
  // [ChainId.BASE]: 'Base',
  // [ChainId.SCROLL]: 'Scroll',
  // [ChainId.NEON]: 'Neon EVM',
  [ChainId.BLAST]: 'Blast L2',
}

export default chainName
