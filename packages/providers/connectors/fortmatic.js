import Fortmatic from 'fortmatic';

const ConnectToFortmatic = async (options) => {
  return new Promise((resolve, reject) => {
    (async () => {
      if (options && options.key) {
        try {
          const key = options.key;
          const fm = new Fortmatic(key, options.network);
          const provider = await fm.getProvider();
          provider.fm = fm;
          await fm.user.login();
          const isLoggedIn = await fm.user.isLoggedIn();
          if (isLoggedIn) {
            resolve(provider);
          } else {
            reject('Failed to login to Fortmatic')
            throw new Error("Failed to login to Fortmatic");
          }
        } catch (error) {
          reject(error)
          throw new Error(error);
        }
      } else {
        reject('Missing Fortmatic key')
        throw new Error("Missing Fortmatic key");
      }
    })().catch((e) => {
      reject("error:", e)
    });
  });
};

export default ConnectToFortmatic;
