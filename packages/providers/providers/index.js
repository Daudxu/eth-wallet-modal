
import WalletConnectLogo from "../logos/walletconnect-circle.svg";

import MetaMaskLogo from "../logos/metamask.svg";


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
