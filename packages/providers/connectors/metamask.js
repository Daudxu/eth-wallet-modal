import $ from 'jquery';
const ConnectToMetamask = async () => {
  return new Promise((resolve, reject) => {
    (async () => {
      let provider = null;
      if (typeof window.ethereum !== 'undefined') {
        provider = window.ethereum;
        try {
          await provider.request({ method: 'eth_requestAccounts' })
        } catch (error) {
          localStorage.removeItem('injected')
          $("#ETH_DAPP_WALLET_CONNECT_MODAL").hide()
          reject("User Rejected")
          throw new Error("User Rejected");

        }
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else if (window.celo) {
        provider = window.celo;
      } else {
        localStorage.removeItem('injected')
        $("#ETH_DAPP_WALLET_CONNECT_MODAL").hide()
        reject("No Web3 Provider found")
        throw new Error("No Web3 Provider found");
      }
      localStorage.setItem("injected", 'metamask')
      resolve(provider);
    })().catch(e => console.log("Caught: " + e));
  });

};

export default ConnectToMetamask;
