import Authereum from 'authereum'

const ConnectToAuthereum = (options) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
        const authereum = new Authereum({
            networkName: options.chainName,
        })
        const provider = authereum.getProvider()
        provider.authereum = authereum
        await provider.enable()
        resolve(provider)
        } catch (error) {
        return reject(error)
        }
      })().catch((e) => {
        reject("error:", e)
      });

    })

  
}

export default ConnectToAuthereum
