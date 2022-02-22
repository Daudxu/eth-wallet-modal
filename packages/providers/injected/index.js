import Web3DefaultLogo from "../logos/metamask.svg";

import MetaMaskLogo from "../logos/metamask.svg";


export const FALLBACK = {
  id: "injected",
  name: "Web3",
  logo: Web3DefaultLogo,
  type: "injected",
  check: "isWeb3"
};

export const METAMASK = {
  id: "injected",
  name: "MetaMask",
  logo: MetaMaskLogo,
  type: "injected",
  check: "isMetaMask"
};
