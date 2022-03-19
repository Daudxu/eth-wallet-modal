import MetaMaskLogo from '../../assets/logos/metamask.svg'

import WalletConnectLogo from '../../assets/logos/walletconnect-circle.svg'

import CoinbaseLogo from '../../assets/logos/coinbase.svg'

import BlockWalletLogo from '../../assets/logos/BlockWallet.png'

import FortmaticLogo from '../../assets/logos/fortmatic.svg'

import BinanceChainWalletLogo from '../../assets/logos/binancechainwallet.svg'

import PortisLogo from '../../assets/logos/portis.svg'

import BurnerWalletLogo from '../../assets/logos/burnerwallet.png'

import TorusLogo from '../../assets/logos/torus.svg'

import AuthereumLogo from '../../assets/logos/authereum.svg'

export const WALLETCONNECT = {
  id: 'walletconnect',
  name: 'WalletConnect',
  logo: WalletConnectLogo,
  type: 'qrcode',
  check: 'isWalletConnect',
}

export const METAMASK = {
  id: 'metamask',
  name: 'MetaMask',
  logo: MetaMaskLogo,
  type: 'metamask',
  check: 'isMetaMask',
}

export const COINBASE = {
  id: 'coinbase',
  name: 'Coinbase',
  logo: CoinbaseLogo,
  type: 'coinbase',
  check: 'isCoinbase',
}

export const BLOCKWALLET = {
  id: 'blockmallet',
  name: 'BlockWallet ',
  logo: BlockWalletLogo,
  type: 'blockmallet',
  check: 'isBlockWallet ',
}

export const FORTMATIC = {
  id: 'fortmatic',
  name: 'Fortmatic',
  logo: FortmaticLogo,
  type: 'fortmatic',
  check: 'isFortmatic',
}

export const BINANCECHAINWALLET = {
  id: 'binancechainwallet',
  name: 'Binance Chain',
  logo: BinanceChainWalletLogo,
  type: 'injected',
  check: 'isBinanceChainWallet',
}

export const PORTIS = {
  id: 'portis',
  name: 'Portis',
  logo: PortisLogo,
  type: 'web',
  check: 'isPortis',
}

export const BURNERCONNECT = {
  id: 'burnerconnect',
  name: 'Burner Connect',
  logo: BurnerWalletLogo,
  type: 'web',
  check: 'isBurnerProvider',
}

export const TORUS = {
  id: 'torus',
  name: 'Torus',
  logo: TorusLogo,
  type: 'web',
  check: 'isTorus',
}

export const AUTHEREUM = {
  id: 'authereum',
  name: 'Authereum',
  logo: AuthereumLogo,
  type: 'web',
  check: 'isAuthereum',
}
