import WalletLink from '@coinbase/wallet-sdk'

const ConnectToWalletLink = (
  opts
) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const options = opts || {};
      const infuraId = options.infuraId || "";
      const chainId = options.chainId || 1;
      const appName = options.appName || "";
      const appLogoUrl = options.appLogoUrl;
      const darkMode = options.darkMode || false;

      let rpc = options.rpc || undefined;
      if (options.infuraId && !options.rpc) {
        rpc = `https://mainnet.infura.io/v3/${infuraId}`;
      }

      const walletLink = new WalletLink({
        appName,
        appLogoUrl,
        darkMode
      });
      try {
        const provider = walletLink.makeWeb3Provider(rpc, chainId);
        await provider.send('eth_requestAccounts');
        resolve(provider);
      } catch (e) {
        reject(e);
      }
    })().catch((e) => {
      reject("error:", e)
    });

  });
};

export default ConnectToWalletLink;
