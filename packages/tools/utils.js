import { CHAIN_DATA_LIST } from "../constants"

export function getChainId (network) {
  const chains = Object.values(CHAIN_DATA_LIST);
  const match = (
    chains,
    x => x.network === network,
    undefined
  );
  if (!match) {
    throw new Error(`No chainId found match ${network}`);
  }
  return match.chainId;
}