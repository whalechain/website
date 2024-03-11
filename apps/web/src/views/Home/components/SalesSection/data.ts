import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'
import iceConeA from '../../../../../public/images/home/trade/iceconea.png'
import bridgeA from '../../../../../public/images/home/bridge/bridge_a.png'
import earnIce from '../../../../../public/images/home/earn/ice.png'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything anywhere, hassle free'),
  bodyText: t(
    'Seamless trading on many chains with the best rates thanks to the built-in DEX aggregator.'
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://whitepaper.whalechain.live',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: iceConeA, alt: '' },
    ],
  },
})

export const bridgeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Bridge securely between many chains'),
  bodyText: t(
    'WhaleChain allows direct bridging between many chains with ' +
      'its audited and battle tested smart contracts. ' +
      'The unique built-in faucet automatically drops you native tokens when you bridge to a new chain.'
  ),
  reverse: true,
  primaryButton: {
    to: '/bridge',
    text: t('Bridge Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://whitepaper.whalechain.live/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: bridgeA, alt: '' },
    ],
  },
})

export const whitepaperSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Whitepaper'),
  bodyText: t('Dive into the intricacies and possibilities that lie ahead by delving into our comprehensive whitepaper. Uncover the blueprint that defines the future trajectory of WhaleChain, unraveling the innovative technologies, groundbreaking concepts, and visionary strategies that propel our project into the forefront of the digital landscape.'),
  reverse: false,
  primaryButton: {
    to: 'https://whitepaper.whalechain.live/',
    text: t('Whitepaper'),
    external: false,
  },
  secondaryButton: null,
  images: {
    path: '/images/home/ice/',
    attributes: [{ src: earnIce, alt: '' }],
  },
})
