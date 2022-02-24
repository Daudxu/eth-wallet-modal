import { getChainId } from "../../tools";
import $ from 'jquery';
import WalletConnectProvider from "@walletconnect/web3-provider";
const ConnectToWalletConnect = (
  opts
) => {
  return new Promise((resolve, reject) => {
    (async () => {
      let bridge = "https://bridge.walletconnect.org";
      let qrcode = true;
      let infuraId = "";
      let rpc = undefined;
      let chainId = 1;
      let qrcodeModalOptions = undefined;

      if (opts) {
        bridge = opts.bridge || bridge;
        qrcode = typeof opts.qrcode !== "undefined" ? opts.qrcode : qrcode;
        infuraId = opts.infuraId || "";
        rpc = opts.rpc || undefined;
        chainId =
          opts.network && getChainId(opts.network) ? getChainId(opts.network) : 1;
        qrcodeModalOptions = opts.qrcodeModalOptions || undefined;
      }

      const provider = new WalletConnectProvider({
        bridge,
        qrcode,
        infuraId,
        rpc,
        chainId,
        qrcodeModalOptions
      });
      try {
        await provider.enable();
        localStorage.setItem("injected", 'walletconnect')
        resolve(provider);
      } catch (e) {
        localStorage.removeItem('injected')
        $("#ETH_DAPP_WALLET_CONNECT_MODAL").hide()
        reject(e);
      }
    })().catch(e => console.log("Caught: " + e));
  });
};

export default ConnectToWalletConnect;
