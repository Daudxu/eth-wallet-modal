import Portis from '@portis/web3';

const ConnectToPortis = async (options) => {
  return new Promise((resolve, reject) => {
    (async () => {
      if (options && options.id) {
        try {
          const id = options.id;
          const chainName = options.chainName || "mainnet";
          var config = ''
          if(typeof(options.config) !== undefined){
             config = options.config;
          }
          const pt = new Portis(id, chainName, config);
          await pt.provider.enable();
          pt.provider._portis = pt;
          resolve(pt.provider);
        } catch (error) {
          return reject(error);
        }
      } else {
        return reject(new Error("Missing Portis Id"));
      }
    })().catch((e) => {
      reject("error:", e)
    });
  });
};

export default ConnectToPortis;
