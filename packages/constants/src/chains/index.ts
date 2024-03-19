import { bitgert } from './bitgert'
import { bsc } from './bsc'
import { core } from './core'
import { dogechain } from './dogechain'
import { dokenchain } from './dokenchain'
import { fuse } from './fuse'
import { xdc } from './xdc'
import { xodex } from "./xodex";
import { shardeumTestnet } from "./shardeumTestnet";
import { telos } from "./telos";
import { shimmerTestnet } from "./shimmerTestnet";
import { base } from "./base";
import { shimmer } from "./shimmer"
import { scroll } from "./scroll"
import { neon } from "./neon"
import { blast } from "./blast"
import { whalechain } from "./whalechain"
import { fortresschain } from "./fortresschain"

export const chainMap = {
  core,
  blast,
  neon,
  shimmer,
  bsc,
  scroll,
  xdc,
  telos,
  bitgert,
  base,
  dogechain,
  fuse,
  xodex,
  dokenchain,
  shardeumTestnet,
  whalechain,
  fortresschain,
  // shimmerTestnet,
}
export const chains = Object.values(chainMap)

export const getChain = (chainId: number) => {
  return chains.find((chain) => chain.id === chainId)
}

export enum ChainId {
  CORE = core.id,
  BLAST = blast.id,
  NEON = neon.id,
  SHIMMER = shimmer.id,
  BSC = bsc.id,
  WHALECHAIN = whalechain.id,
  FORTRESSCHAIN = fortresschain.id,
  SCROLL = scroll.id,
  XDC = xdc.id,
  TELOS = telos.id,
  BITGERT = bitgert.id,
  BASE = base.id,
  DOGE = dogechain.id,
  FUSE = fuse.id,
  XODEX = xodex.id,
  DOKEN = dokenchain.id,
  SHARDEUM_TEST = shardeumTestnet.id,
  SHIMMER_TEST = shimmerTestnet.id,
}

export const defaultChainId = ChainId.WHALECHAIN
