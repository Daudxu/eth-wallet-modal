import Torus from '@toruslabs/torus-embed'

const ConnectToTorus = async () => {
  return new Promise( (resolve, reject) => {
    (async () => {
        try {
          const torus = new Torus()
          await torus.init()
          await torus.login()
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
