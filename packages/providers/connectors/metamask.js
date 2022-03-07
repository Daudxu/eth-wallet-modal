const ConnectToMetamask = async () => {
  return new Promise((resolve, reject) => {
    (async () => {
      let provider = null;
      if (typeof window.ethereum !== 'undefined') {
        provider = window.ethereum;
        try {
          await provider.request({ method: 'eth_requestAccounts' })
        } catch (error) {
          reject("User Rejected")
          throw new Error("User Rejected");

        }
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else if (window.celo) {
        provider = window.celo;
      } else {
        reject("No Web3 Provider found")
        throw new Error("No Web3 Provider found");
      }
      resolve(provider);
    })().catch((e) => {
      reject("error:", e)
    });
  });

};

export default ConnectToMetamask;
