English | [简体中文](./README.zh-CN.md)

<h1 align="center">
   ETH Wallet Modal 
</h1>

[![npm][npm]][npm-url]  ![NPM](https://img.shields.io/npm/l/eth-wallet-modal) ![npm](https://img.shields.io/npm/dt/eth-wallet-modal?color=4D88DB&label=NPM%20Downloads)


<h3 align="center">
  An Ethereum Provider Solution for Integrated Wallets and Dapps
</h3>

#### ⚠️ Notice ⚠️

If you need to reduce unnecessary imports and load drivers on demand, please go to the <a href="https://github.com/Daudxu/dapp-wallet-modal">dapp-wallet-modal</a> project

## ✔️ Current support 🚀
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


## 🎉 Preview 🎉

![preview](./images/preview.png)

##  💻 example  💻
https://daudxu.github.io/eth-wallet-modal/

##  🚩 Usage  🚩

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
          blockmallet: {
            displayView: {
              logo: BlockWalletLogo,
              name: "BlockWallet",
            },
            options: {}
          },
          fortmatic: {
            displayView: {
              logo: FortmaticLogo,
              name: "Fortmatic",
            },
            options: {
              chainId: CHAINID,
              key:'pk_test_E652xxxxz525CA4198573'
            }
          },
          binancechainwallet: {
            displayView: {
              logo: BinancechainwalletLogo,
              name: "Binance Wallet",
            },
            options: {}
          },
          portis: {
            displayView: {
              logo: PortisLogo,
              name: "Portis",
            },
            options: {
                chainName: 'rinkeby', //mainnet,ropsten,rinkeby,goerli ...
                id:'c668f1f8-xxxx-493e-86a1-b5c41d721ad9'
            }
          }
        }

      }

const eth-wallet-modal = new eth-wallet-modal(providerOptions);

const provider = await eth-wallet-modal.connect();

const web3 = new Web3(provider);

```

## Options

| name            | type     | description           |
| --------------- | -------- | --------------------- |
| providerOptions | object   | see description below |
| connect         | function | return  provider      |
| disconnect      | function | provider or null      |



providerOptions parameter

| name            | type     | description           |
| --------------- | -------- | --------------------- |
| logo            | string   | Your logo path address|
| maskColor       | string   | mask Color            |
| bgColor         | string   | Modal background color|
| borderColor     | string   | Modal border color    |
| chainId         | int      | chain Id              |
| walletOptions   | array    | See the table below   |

walletOptions parameter

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


metamask  config
Document address: https://docs.metamask.io/guide/
```
         metamask: {
            displayView: {
              logo: 'https://raw.org/metamask.svg'  // 你自己定义的 metamask logo 地址用于显示,   
              name: 'metamask'  // 你自己定义的 metamask 前端显示的名字 ,
            },
            options: {}   //无需传参
          },

```

walletconnect  config
Document address: https://docs.walletconnect.com/
```
        walletconnect: {
          displayView: {
            logo: 'https://raw.org/walletconnect.svg'  // 你自己定义的 walletconnect logo 地址用于显示,   
            name: "WalletConnect",  // 你自己定义的 WalletConnect 前端显示的名字 ,
          },
          options: {
            rpc: {
              1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa414516161',
              4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12ea221a4456161'
            },
            chainId: 区块网络链ID,
            bridge: 'https://bridge.walletconnect.org'
          }
        },
```

coinbase  config
Document address: https://docs.cloud.coinbase.com/wallet-sdk/docs/installing
```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/coinbase.svg'  // 你自己定义的 Coinbase Wallet logo 地址用于显示,   
            name: "Coinbase Wallet",  // 你自己定义的 Coinbase Wallet 前端显示的名字 ,
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
```

blockmallet  config
Document address: https://help.blockwallet.io/hc/en-us/articles/4437032129169-How-to-Integrate-BlockWallet-With-Your-DApp
```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/blockmallet.svg'  // 你自己定义的 blockmallet Wallet logo 地址用于显示,   
            name: "blockmallet",  // 你自己定义的 blockmallet Wallet 前端显示的名字 ,
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
```

fortmatic  config
Document address: https://docs.fortmatic.com/
```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/fortmatic.svg'  // 你自己定义的 fortmatic Wallet logo 地址用于显示,   
            name: "fortmatic",  // 你自己定义的 fortmatic Wallet 前端显示的名字 ,
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
```

binancechainwallet  config
Document address: https://www.binance.com/en/wallet-direct
```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/binancechainwallet.svg'  // 你自己定义的 binancechainwallet  logo 地址用于显示,   
            name: "binancechainwallet",  // 你自己定义的 binancechainwallet 前端显示的名字 ,
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
```

portis  config
Document address: https://docs.portis.io/#/
```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/portis.svg'  // 你自己定义的 portis  logo 地址用于显示,   
            name: "portis",  // 你自己定义的 portis 前端显示的名字 ,
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
```

burnerconnect  config
Document address: https://burnerfactory.com/mywallets
progect address: https://github.com/burner-wallet/burner-connect-provider
```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/burnerconnect.svg'  // 你自己定义的 burnerconnect  logo 地址用于显示,   
            name: "burnerconnect",  // 你自己定义的 burnerconnect 前端显示的名字 ,
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
```



torus  config
Document address: https://docs.tor.us/integration-builder/?b=wallet&chain=Ethereum&lang=Vue
```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/coinbase.svg'  // 你自己定义的 Coinbase Wallet logo 地址用于显示,   
            name: "Coinbase Wallet",  // 你自己定义的 Coinbase Wallet 前端显示的名字 ,
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
       
```

authereum  config
Document address: https://docs.authereum.com/integration
```
         coinbase: {
            displayView: {
            logo: 'https://raw.org/authereum.svg'  // 你自己定义的 authereum  logo 地址用于显示,   
            name: "authereum",  // 你自己定义的 authereum 前端显示的名字 ,
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
```




## Provider subscription Events

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

## Features

- [v] Built for Ethereum using [Web3](https://github.com/ethereum/web3.js/).
- [v] Implements [Graph Protocol](https://github.com/graphprotocol) to read blockchain.

## Changelog

### 2022.02.21

> v1.0.0   
 init project

### 2022.03.12
> v1.1.3   
 add fortmatic, binance, portis 
 Mask background color customization
 Modal box background color customization
 Modal box border color customization

## other

- Etherscan: https://etherscan.io/apis
- Infura: https://infura.io/
- ETH Gas Station: https://docs.ethgasstation.info/
- Imgix: https://www.imgix.com/

[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/
