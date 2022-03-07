import Fortmatic from 'fortmatic';

const ConnectToFortmatic = async (opts) => {
  return new Promise((resolve, reject) => {
    (async () => {
      if (opts && opts.key) {
        try {
          const key = opts.key;
          const fm = new Fortmatic(key, opts.network);
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
    })().catch(e => console.log("Caught: " + e));
  });
};

export default ConnectToFortmatic;
