import Torus from '@toruslabs/torus-embed'

const ConnectToTorus = async (options) => {
  return new Promise( (resolve, reject) => {
    (async () => {
        try {
          let buttonPosition = 'bottom-left'
          let apiKey = 'torus-default'
          let modalZIndex = 99999
          let network = { host: 'mainnet' }
          let defaultVerifier = undefined

          network =
          options.networkParams || options.network
              ? { host: options.network, ...options.networkParams }
              : network

          const torus = new Torus({
            buttonPosition: options.config?.buttonPosition || buttonPosition,
            apiKey: options.config?.apiKey || apiKey,
            modalZIndex: options.config?.modalZIndex || modalZIndex,
          })
          await torus.init({
            showTorusButton: false,
            ...options.config,
            network,
          })

          if (options.loginParams) {
            defaultVerifier = options.loginParams.verifier
          }
          await torus.login({ verifier: defaultVerifier })
          const provider = torus.provider
          provider.torus = torus
          resolve(provider)
        } catch (err) {
          reject(err)
        }
    })().catch((e) => {
      reject("error:", e)
    })
  })
}

export default ConnectToTorus
