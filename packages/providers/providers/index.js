
import WalletConnectLogo from "../../assets/logos/walletconnect-circle.svg";

import MetaMaskLogo from "../../assets/logos/metamask.svg";

import CoinbaseLogo from "../../assets/logos/coinbase.svg";


export const WALLETCONNECT = {
  id: "walletconnect",
  name: "WalletConnect",
  logo: WalletConnectLogo,
  type: "qrcode",
  check: "isWalletConnect",
  package: {
    required: [["infuraId", "rpc"]]
  }
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
