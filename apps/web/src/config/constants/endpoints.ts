import { ChainId } from '@pancakeswap/sdk'

export const STABLESWAP_SUBGRAPH_CLIENT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap'

export const FARM_API = 'https://farms.pancake-swap.workers.dev'

export const GRAPH_HEALTH = 'https://the-graph-status.whalechain.live/graphql' // https://api.thegraph.com/index-node/graphql'
export const BIT_QUERY = 'https://graphql.bitquery.io'
export const ACCESS_RISK_API = '/api/risk'
export const ONRAMP_API_BASE_URL = 'https://pcs-on-ramp-api.com'
export const CELER_API = 'https://api.celerscan.com/scan'

export const INFO_CLIENT_WITH_CHAIN = {
  [ChainId.BITGERT]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/exchange-v2-bitgert',
  [ChainId.XDC]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/exchange-v2-xdc',
  [ChainId.CORE]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/exchange-v2-core',
  [ChainId.SCROLL]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/exchange-v2-scroll',
  [ChainId.TELOS]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/exchange-v2-telos',
  [ChainId.BASE]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/exchange-v2-base',
  [ChainId.SHIMMER]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/exchange-v2-shimmer',
}

export const BLOCKS_CLIENT_WITH_CHAIN = {
  [ChainId.BITGERT]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/blocks-bitgert',
  [ChainId.XDC]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/blocks-xdc',
  [ChainId.CORE]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/blocks-core',
  [ChainId.SCROLL]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/blocks-scroll',
  [ChainId.TELOS]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/blocks-telos',
  [ChainId.BASE]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/blocks-base',
  [ChainId.SHIMMER]: 'https://the-graph.whalechain.live/subgraphs/name/icecreamswap/blocks-shimmer',
}

export const V3_SUBGRAPH_URLS = {
  [ChainId.CORE]: `https://the-graph.whalechain.live/subgraphs/name/icecreamswap/exchange-v3-core`,
} satisfies Record<ChainId, string>

export const ASSET_CDN = 'https://assets.pancakeswap.finance'

export const TRADING_REWARD_API = 'https://pancake-trading-fee-rebate-api.pancake.run/api/v1'

export const QUOTING_API = `${process.env.NEXT_PUBLIC_QUOTING_API}`

export const FARMS_API = 'https://farms-api.whalechain.live'

export const MERCURYO_WIDGET_ID = process.env.NEXT_PUBLIC_MERCURYO_WIDGET_ID || '64d1f9f9-85ee-4558-8168-1dc0e7057ce6'

export const MOONPAY_BASE_URL = 'https://api.moonpay.com'
export const MOONPAY_API_KEY = process.env.NEXT_PUBLIC_MOONPAY_LIVE_KEY || 'pk_test_1Ibe44lMglFVL8COOYO7SEKnIBrzrp54'

// no need for extra public env
export const MERCURYO_WIDGET_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://sandbox-widget.mrcr.io/embed.2.0.js'
    : 'https://widget.mercuryo.io/embed.2.0.js'
