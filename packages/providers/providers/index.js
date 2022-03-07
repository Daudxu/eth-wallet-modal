
import MetaMaskLogo from "../../assets/logos/metamask.svg";

import WalletConnectLogo from "../../assets/logos/walletconnect-circle.svg";

import CoinbaseLogo from "../../assets/logos/coinbase.svg";

import BlockWalletLogo from "../../assets/logos/BlockWallet.png";

import FortmaticLogo from "../../assets/logos/fortmatic.svg";

import BinanceChainWalletLogo from "../../assets/logos/binancechainwallet.svg";

import PortisLogo from "../../assets/logos/portis.svg";

import BitskiLogo from "../../assets/logos/bitski.svg";

import VenlyLogo from "../../assets/logos/venly.svg";

import TorusLogo from "../../assets/logos/torus.svg";

export const WALLETCONNECT = {
  id: "walletconnect",
  name: "WalletConnect",
  logo: WalletConnectLogo,
  type: "qrcode",
  check: "isWalletConnect",
};

export const METAMASK = {
  id: "metamask",
  name: "MetaMask",
  logo: MetaMaskLogo,
  type: "metamask",
  check: "isMetaMask"
};


export const COINBASE = {
  id: "coinbase",
  name: "Coinbase",
  logo: CoinbaseLogo,
  type: "coinbase",
  check: "isCoinbase"
};

export const BLOCKWALLET = {
  id: "blockmallet",
  name: "BlockWallet ",
  logo: BlockWalletLogo,
  type: "blockmallet",
  check: "isBlockWallet "
};

export const FORTMATIC = {
  id: "fortmatic",
  name: "Fortmatic",
  logo: FortmaticLogo,
  type: "fortmatic",
  check: "isFortmatic"
};

export const BINANCECHAINWALLET = {
  id: "binancechainwallet",
  name: "Binance Chain",
  logo: BinanceChainWalletLogo,
  type: "injected",
  check: "isBinanceChainWallet"
};

export const PORTIS = {
  id: "portis",
  name: "Portis",
  logo: PortisLogo,
  type: "web",
  check: "isPortis",
};

export const BITSKI = {
  id: "bitski",
  name: "Bitski",
  logo: BitskiLogo,
  type: "web",
  check: "isBitski",
};

export const VENLY = {
  id: "venly",
  name: "Venly",
  logo: VenlyLogo,
  type: "web",
  check: "isVenly",
};

export const TORUS = {
  id: "torus",
  name: "Torus",
  logo: TorusLogo,
  type: "web",
  check: "isTorus"
};

