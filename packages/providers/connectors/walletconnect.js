import { getChainId } from "../../tools";
import WalletConnectProvider from "@walletconnect/web3-provider";

const ConnectToWalletConnect = async (
  opts
) => {
  return await new Promise((resolve, reject) => {
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
        resolve(provider);
      } catch (e) {
        reject(e);
      }
    })().catch((e) => {
      reject("error:", e)
    });
  });
};

export default ConnectToWalletConnect;
