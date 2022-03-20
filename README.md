English | [简体中文](./README.zh-CN.md) | [日本](./README.ja-JP.md) 

<h1 align="center">
   ETH Wallet Modal 
</h1>

[![npm][npm]][npm-url]  ![NPM](https://img.shields.io/npm/l/eth-wallet-modal) ![npm](https://img.shields.io/npm/dt/eth-wallet-modal?color=4D88DB&label=NPM%20Downloads)


<h3 align="center">
  An Ethereum Provider Solution for Integrated Wallets and Dapps
</h3>

#### ⚠️ Notice 

If you need to reduce unnecessary imports and load drivers on demand, please go to the <a href="https://github.com/Daudxu/dapp-wallet-modal">dapp-wallet-modal</a> project

## 🚀 Current support 
<p float="left">
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/metamask.svg" width="30" height="30" alt="metamask"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/walletconnect.svg" width="30" height="30" alt="walletconnect"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/coinbase.svg" width="30" height="30" alt="coinbase"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/BlockWallet.png" width="30" height="30" alt="coinbase"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/fortmatic.svg" width="30" height="30" alt="blockmallet"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/binancechainwallet.svg" width="30" height="30" alt="binance"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/portis.svg" width="30" height="30" alt="portis"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/burnerwallet.png" width="30" height="30" alt="burnerwallet"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/torus.svg" width="30" height="30" alt="torus"/>
<img src="https://raw.githubusercontent.com/Daudxu/eth-wallet-modal/master/examples/assets/logos/authereum.svg" width="30" height="30" alt="authereum"/>
</p>


## 🎉 Preview 

![preview](./images/preview.png)

##  💻 example  
https://daudxu.github.io/eth-wallet-modal/

##  🚩 Usage 

### 1️⃣ Install eth-wallet-modal NPM package

```
npm install --save eth-wallet-modal
# OR
yarn add eth-wallet-modal
```

### 2️⃣ Then you can add eth-wallet-modal to your Dapp as follows

```
import Web3 from "web3";
import ethWalletModal from "eth-wallet-modal";

const  providerOptions = {
        logo: LOGO,
        maskColor:'rgb(30, 30, 30, 0.8)',
        bgColor:'#363636',
        borderColor:'#faba30',
        chainId: CHAINID,
        walletOptions: {
          metamask: {
            displayView: {
              logo: MetaMaskLogo,
              name: "MetaMask",
            },
            options: {}
          },
          walletconnect: {
            displayView: {
              logo: WalletConnectLogo,
              name: "WalletConnect",
            },
            options: {
              rpc: {
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa414516161',
                4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12ea221a4456161'
              },
              chainId: CHAINID,
              bridge: 'https://bridge.walletconnect.org'
            }
          },
          coinbase: {
            displayView: {
              logo: CoinbaseLogo,
              name: "Coinbase Wallet",
            },
            options: {
              infuraId: '9aa3d95b3bxxxc440fa88ea12eaa4456161',
              chainId: CHAINID,
              appName: 'Digi',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
          .....
        }

      }

const walletModal = new ethWalletModal(providerOptions);

const provider = await walletModal.connect();

const web3 = new Web3(provider);

```

## 📝 Options

| name            | type     | description           |
| --------------- | -------- | --------------------- |
| providerOptions | object   | see description below |
| connect         | function | return  provider      |
| disconnect      | function | provider or null      |



#####  providerOptions parameter

| name            | type     | description           |
| --------------- | -------- | --------------------- |
| logo            | string   | Your logo path address|
| maskColor       | string   | mask Color            |
| bgColor         | string   | Modal background color|
| borderColor     | string   | Modal border color    |
| chainId         | int      | chain Id              |
| walletOptions   | array    | See the table below   |

#####  walletOptions parameter

| name            | type     | description           |
| --------------- | -------- | --------------------- |
| metamask        | array    | See the metamask  below|
| walletconnect       | array   | See the walletconnect  below |
| coinbase         | array   | See the coinbase  below|
| blockmallet     | array   | See the blockmallet  below|
| fortmatic         | array      | See the fortmatic  below|
| binancechainwallet   | array    | See the binancechainwallet  below|
| portis          | array    | See the metamaskportis  below |
| burnerconnect      | array | See the burnerconnect below     |
| torus              | array | See the torus below     |
| authereum          | array | See the authereum below     |


##### metamask 

Official Doc: <a href="https://docs.metamask.io/guide/" target="view_window"> View Doc </a>  

```
         metamask: {
            displayView: {
              logo: 'https://raw.org/metamask.svg' // The logo address you define to display your wallet.  
              name: 'metamask'  //  The name displayed on the front of your own wallet.
            },
          }
```

##### walletconnect

Official Doc: <a href="https://docs.walletconnect.com" target="view_window"> View Doc </a>  

```
        walletconnect: {
          displayView: {
            logo: 'https://raw.org/walletconnect.svg' // The logo address you define to display your wallet.  
            name: "WalletConnect",   //  The name displayed on the front of your own wallet.
          },
          options: {
            rpc: {
              1: 'Your infra 1 chain address',
              4: 'Your infra 4(test Network) chain address'
            },
            chainId: Blockchain network ID,
            bridge: 'https://bridge.walletconnect.org'
          }
        }

// ⚠️ Configuration reference official documentation 
```

#####  coinbase  

Official Doc: <a href="https://docs.cloud.coinbase.com/wallet-sdk/docs/installing" target="view_window"> View Doc </a>  

```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/coinbase.svg' // The logo address you define to display your wallet.  
            name: "Coinbase Wallet",  //  The name displayed on the front of your own wallet.
            },
            options: {
              infuraId: 'your infuraId ID',
              chainId: Blockchain network ID,
              appName: 'Your app name',
              appLogoUrl: Your app logo,
              darkMode: false
            }
          }
          
  // ⚠️ Configuration reference official documentation 
```

##### blockmallet 

Official Doc: <a href="https://help.blockwallet.io/hc/en-us/articles/4437032129169-How-to-Integrate-BlockWallet-With-Your-DApp" target="view_window"> View Doc </a>  

```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/blockmallet.svg' // The logo address you define to display your wallet.   
            name: "blockmallet",  //  The name displayed on the front of your own wallet.
            },
          }
```

#####  fortmatic 

Official Doc: <a href=" https://docs.fortmatic.com/" target="view_window"> View Doc </a>  

```
         fortmatic: {
            displayView: {
            logo: 'https://raw.org/fortmatic.svg' // The logo address you define to display your wallet.  
            name: "fortmatic",  //  The name displayed on the front of your own wallet.
            },
            options: {
              chainId: Blockchain network ID,
              key:'your fortmatic key'
            }
          }

 // ⚠️ Configuration reference official documentation      
```

#####  binancechainwallet 

Official Doc <a href=" https://docs.binance.org/smart-chain/wallet/wallet_api.html" target="view_window"> View Doc </a>  

```
         binancechainwallet: {
            displayView: {
            logo: 'https://raw.org/binancechainwallet.svg' // The logo address you define to display your wallet.  
            name: "binancechainwallet",  //  The name displayed on the front of your own wallet.
            }
          }

```

#####  portis

Official Doc: <a href=" https://docs.portis.io/#/" target="view_window"> View Doc </a>  

```
         portis: {
            displayView: {
            logo: 'https://raw.org/portis.svg' // The logo address you define to display your wallet.  
            name: "portis",  //  The name displayed on the front of your own wallet.
            },
            options: {
                chainName: 'rinkeby', //  chain Name if
                id:'your protis key' 
            }
          }

// ⚠️ Configuration reference official documentation     
```
 options chainName list
| Network	| Description 	|	Default Gas Relay Hub	|
| --------------- | -------- | --------------------- |
| mainnet |	Ethereum - main network|	0xD216153c06E857cD7f72665E0aF1d7D82172F494|
| ropsten	|Ethereum - ropsten network	|0xD216153c06E857cD7f72665E0aF1d7D82172F494 |
| rinkeby|	Ethereum - rinkeby network|	0xD216153c06E857cD7f72665E0aF1d7D82172F494 |
| goerli|	Ethereum - goerli network |	0xD216153c06E857cD7f72665E0aF1d7D82172F494|
|ubiq|	UBQ - main network|	-|
|thundercoreTestnet|	TT| - test network	-|
|orchid|	RootStock - main network|	-|
|orchidTestnet|	RootStock - test network|	-|
|kovan|	Ethereum - kovan network|	0xD216153c06E857cD7f72665E0aF1d7D82172F494|
|classic|	Ethereum Classic - |main network	-|
|sokol|	POA - test network|	-|
|core|	POA - main network|	-|
|xdai|	xDai - main network	0xD216153c06E857cD7f72665E0aF1d7D82172F494|
|thundercore|	TT - main network|	-|
|fuse|	Fuse - main network	|-|
|lightstreams|	Lightstreams |- main network	-|
|matic|	MATIC - main network|	-|
|maticMumbai	|MATIC - mumbai test network|	-|
|maticAlpha|	MATIC - alpha network	|-|
|maticTestnet|	MATIC - test network|	-|
<a href="https://docs.portis.io/#/configuration">official doc configuration</a>


##### burnerconnect

Official Doc: <a href=" https://medium.com/gitcoin/burner-modules-c6737cf06fe" target="view_window"> View Doc </a>  

Progect address: <a href=" https://github.com/burner-wallet/burner-connect-provider" target="view_window"> View Doc </a>

```
         burnerconnect: {
            displayView: {
            logo: 'https://raw.org/burnerconnect.svg'  // The logo address you define to display your wallet.  
            name: "burnerconnect",   //  The name displayed on the front of your own wallet.
            },
            options: {
              defaultNetwork: default Blockchain network ID,
              chainId: Blockchain network ID
            }
          },
```



##### torus

Official Doc: <a href=" https://docs.tor.us/integration-builder/?b=wallet&chain=Ethereum&lang=Vue" target="view_window"> View Doc</a>  

```
         torus: {
            displayView: {
            logo: 'https://raw.org/torus.svg'  // The logo address you define to display your wallet.  
            name: "torus Wallet",  //  The name displayed on the front of your own wallet.
            }
          },
       
```

##### authereum

Official Doc: <a href=" https://docs.authereum.com/integration" target="view_window"> View Doc </a>  

```
         authereum: {
            displayView: {
            logo: 'https://raw.org/authereum.svg'  // The logo address you define to display your wallet.   
            name: "authereum",  // The name displayed on the front of your own wallet.
            },
            options: {
               chainName: 'rinkeby',  // Need to pass in the chain Name eg： kova, rinkeby, mainne
            }
          },

// ⚠️ Configuration reference official documentation     
```
 options chainName list
| Network	| Description 	|	Default Gas Relay Hub	|
| --------------- | -------- | --------------------- |
| mainnet |	Ethereum - main network|	0xD216153c06E857cD7f72665E0aF1d7D82172F494|
| ropsten	|Ethereum - ropsten network	|0xD216153c06E857cD7f72665E0aF1d7D82172F494 |
| rinkeby|	Ethereum - rinkeby network|	0xD216153c06E857cD7f72665E0aF1d7D82172F494 |
| goerli|	Ethereum - goerli network |	0xD216153c06E857cD7f72665E0aF1d7D82172F494|
|ubiq|	UBQ - main network|	-|
|thundercoreTestnet|	TT| - test network	-|
|orchid|	RootStock - main network|	-|
|orchidTestnet|	RootStock - test network|	-|
|kovan|	Ethereum - kovan network|	0xD216153c06E857cD7f72665E0aF1d7D82172F494|
|classic|	Ethereum Classic - |main network	-|
|sokol|	POA - test network|	-|
|core|	POA - main network|	-|
|xdai|	xDai - main network	0xD216153c06E857cD7f72665E0aF1d7D82172F494|
|thundercore|	TT - main network|	-|
|fuse|	Fuse - main network	|-|
|lightstreams|	Lightstreams |- main network	-|
|matic|	MATIC - main network|	-|
|maticMumbai	|MATIC - mumbai test network|	-|
|maticAlpha|	MATIC - alpha network	|-|
|maticTestnet|	MATIC - test network|	-|



## 📖 Provider subscription Events

```
// Subscribe to accounts change
provider.on("accountsChanged", (accounts: string[]) => {
  console.log(accounts);
});

// Subscribe to chainId change
provider.on("chainChanged", (chainId: number) => {
  console.log(chainId);
});

// Subscribe to provider connection
provider.on("connect", (info: { chainId: number }) => {
  console.log(info);
});

// Subscribe to provider disconnection
provider.on("disconnect", (error: { code: number; message: string }) => {
  console.log(error);
});
```

## 🎾 Features

- [v] Built for Ethereum using [Web3](https://github.com/ethereum/web3.js/).
- [v] Implements [Graph Protocol](https://github.com/graphprotocol) to read blockchain.

## 📝 Changelog

##### 2022.02.21

> v1.0.0   
 init project

##### 2022.03.12
> v1.1.3   
 add fortmatic, binance, portis 
 Mask background color customization
 Modal box background color customization
 Modal box border color customization

##### 2022.03.20
> v1.1.6   
Add fortmatic, binance and Portis wallet support


## ✈️ other

- Etherscan: https://etherscan.io/apis
- Infura: https://infura.io/
- ETH Gas Station: https://docs.ethgasstation.info/
- Imgix: https://www.imgix.com/

[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/
