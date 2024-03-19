import Image, { StaticImageData } from 'next/image'
import { HelpIcon } from '@pancakeswap/uikit'
import { isChainSupported } from '../../utils/wagmi'
import { memo } from 'react'
import logo32520 from '../../../public/images/chains/32520.png'
import logo2000 from '../../../public/images/chains/2000.png'
import logo61916 from '../../../public/images/chains/61916.png'
import logo122 from '../../../public/images/chains/122.png'
import logo50 from '../../../public/images/chains/50.png'
import logo56 from '../../../public/images/chains/56.png'
import logo1116 from '../../../public/images/chains/1116.png'
import logo2415 from '../../../public/images/chains/2415.png'
import logo8082 from '../../../public/images/chains/8082.png'
import logo40 from '../../../public/images/chains/40.png'
import logo1072 from '../../../public/images/chains/1072.png'
import logo8453 from '../../../public/images/chains/8453.png'
import logo148 from '../../../public/images/chains/148.png'
import logo534352 from '../../../public/images/chains/534352.png'
import logo245022934 from '../../../public/images/chains/245022934.png'
import logo81457 from '../../../public/images/chains/81457.png'
import logo370 from '../../../public/images/chains/370.png'
import logo372 from '../../../public/images/chains/372.png'
import { ChainId } from '@pancakeswap/sdk'

const logoMap: Record<ChainId, StaticImageData> = {
  32520: logo32520,
  2000: logo2000,
  61916: logo61916,
  122: logo122,
  50: logo50,
  56: logo56,
  1116: logo1116,
  2415: logo2415,
  8082: logo8082,
  40: logo40,
  8453: logo8453,
  1072: logo1072,
  148: logo148,
  534352: logo534352,
  245022934: logo245022934,
  81457: logo81457,
  370: logo370,
  372: logo372
}

export const ChainLogo = memo(
  ({ chainId, width = 24, height = 24 }: { chainId: number; width?: number; height?: number }) => {
    if (isChainSupported(chainId)) {
      return (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src={logoMap[chainId]}
          width={width}
          height={height}
        />
      )
    }

    return <HelpIcon width={width} height={height} />
  },
)
