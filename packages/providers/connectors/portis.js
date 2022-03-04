import Portis from '@portis/web3';

const ConnectToPortis = async (opts) => {
  return new Promise((resolve, reject) => {
    (async () => {
      if (opts && opts.id) {
        try {
          const id = opts.id;
          const network = opts.network || "mainnet";
          const config = opts.config;
          const pt = new Portis(id, network, config);
          await pt.provider.enable();
          pt.provider._portis = pt;
          resolve(pt.provider);
        } catch (error) {
          return reject(error);
        }
      } else {
        return reject(new Error("Missing Portis Id"));
      }
    })().catch(e => console.log("Caught: " + e));
  });
};

export default ConnectToPortis;
