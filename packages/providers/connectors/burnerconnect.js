import BurnerConnectProvider from '@burner-wallet/burner-connect-provider'

const ConnectToBurnerConnect = async (options) => {
  options.defaultNetwork = options.defaultNetwork || options.network

  const provider = new BurnerConnectProvider(options)

  await provider.enable()

  return provider
}

export default ConnectToBurnerConnect
