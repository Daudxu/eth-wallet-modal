[English](./README.md) | 简体中文

<h1 align="center">
    ETH Wallet Modal
</h1>

[![npm][npm]][npm-url] ![NPM](https://img.shields.io/npm/l/eth-wallet-modal) ![npm](https://img.shields.io/npm/dt/eth-wallet-modal?color=4D88DB&label=NPM%20Downloads)

<h4 align="center">
    以太坊钱包和Dapp提供商解决方案, 集成多Dapp钱包，可以轻松接入你的网站
</h4>

## 现在支持的 Dapp 钱包

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

## 预览展示

![preview](./images/preview.png)

## 演示案例

https://daudxu.github.io/eth-wallet-modal/

## 用法

### 1. 安装 eth-wallet-modal NPM 包

```
# 使用 NPM 安装
npm install --save eth-wallet-modal
# 或者使用 yarn 安装
yarn add eth-wallet-modal
```

### 2.将 eth-wallet-modal 添加到项目中，如下所示

```

import Web3 from "web3";
import ethWalletModal from "eth-wallet-modal";

const  providerOptions = {
        logo: LOGO,
        maskColor:'rgb(30, 30, 30, 0.8)',
        bgColor:'#363636',
        borderColor:'#faba30',
        chainId: 区块网络链ID,
        walletOptions: {
          metamask: {
            displayView: {
              logo: 你的 metamask LOGO 地址,
              name: "MetaMask",
            },
            options: {}
          },
          walletconnect: {
            displayView: {
              logo: 你的 walletconnect LOGO 地址,
              name: "WalletConnect",
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
          coinbase: {
            displayView: {
              logo: 你的 coinbase LOGO 地址,
              name: "Coinbase Wallet",
            },
            options: {
              infuraId: '你的 infuraId ID',
              chainId: 区块网络链ID,
              appName: '你定义的应用名称',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
          blockmallet: {
            displayView: {
              logo: 你的 blockmallet LOGO 地址,
              name: "BlockWallet",
            },
            options: {}
          },
          fortmatic: {
            displayView: {
              logo: 你的 fortmatic LOGO 地址,
              name: "Fortmatic",
            },
            options: {
              chainId: 区块网络链ID,
              key:'你的 fortmatic key'
            }
          },
          binancechainwallet: {
            displayView: {
              logo: 你的 binancechainwallet LOGO 地址,
              name: "Binance Wallet",
            },
            options: {}
          },
          portis: {
            displayView: {
              logo: 你的 portis LOGO 地址,
              name: "Portis",
            },
            options: {
                chainName: 'rinkeby', //mainnet,ropsten,rinkeby,goerli ...
                id:'你的 portis ID'
            }
          }
        }

      }

const WalletModal = new ethWalletModal(providerOptions);

const provider = await WalletModal.connect();

const web3 = new Web3(provider);
```

## 参数选项

| name            | type     | description           |
| --------------- | -------- | --------------------- |
| providerOptions | object   | see description below |
| connect         | function | return provider       |
| disconnect      | function | provider or null      |

providerOptions parameter

| name          | type   | description            |
| ------------- | ------ | ---------------------- |
| logo          | string | Your logo path address |
| maskColor     | string | mask Color             |
| bgColor       | string | Modal background color |
| borderColor   | string | Modal border color     |
| chainId       | int    | chain Id               |
| walletOptions | array  | See the table below    |

walletOptions parameter

| 名称               | 类型   | 描述                      |
| ------------------ | ----- | -------------------------------- |
| metamask           | 数组 | See the metamask below           |
| walletconnect      | 数组 | See the walletconnect below      |
| coinbase           | 数组 | See the coinbase below           |
| blockmallet        | 数组 | See the blockmallet below        |
| fortmatic          | 数组 | See the fortmatic below          |
| binancechainwallet | 数组 | See the binancechainwallet below |
| portis             | 数组 | See the portis below     |
| burnerconnect      | 数组 | See the burnerconnect below     |
| torus              | 数组 | See the torus below     |
| authereum          | 数组 | See the authereum below     |

```
eg:
const CHAINID = 4
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
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa414511116161',
                4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12ea221a4422256161'
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
              infuraId: '9aa3d95b3b1xxxc4401313fa88ea12eaa4456161',
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
              key:'pk_test_E652x23xxa1z525CA4198573'
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
                id:'c668f1f8-a12zx-493e-86a1-b5c41d721ad9'
            }
          }
        }

 walletconnect  config reference resources  https://docs.walletconnect.com/quick-start/dapps/web3-provider
```

### VUE演示案例代码

```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Dapp ETH Wallet Modal plugin.
    </p>
    <div class="ex-main">
      <div class="ex-main-box">

        <button v-show="provider === ''"
                @click="handleClickConnect">Click Connect</button>
        <button v-show="provider"
                @click="handleClickDisconnect">Click disconnect</button>
      </div>
    </div>

  </div>
</template>

 <script>

import Base from 'eth-wallet-modal';

import WalletConnectLogo from "../assets/logos/walletconnect-circle.svg";

import MetaMaskLogo from "../assets/logos/metamask.svg";

import CoinbaseLogo from "../assets/logos/coinbase.svg";

import BlockWalletLogo from "../assets/logos/BlockWallet.png";

import FortmaticLogo from "../assets/logos/fortmatic.svg";

import BinancechainwalletLogo from "../assets/logos/binancechainwallet.svg";

import PortisLogo from "../assets/logos/portis.svg";

const CHAINID = 4;

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      baseModel: '',
      provider: '',
      providerOptions: {
        logo: WalletConnectLogo,
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
        },

      }
    }
  },
  mounted () {
    this.baseModel = new Base(this.providerOptions)
    const walletType = localStorage.getItem("injected")
    var _this = this
    if (walletType && typeof (walletType) !== 'undefined') {
      setTimeout(function () {
        console.log('lai le')
        _this.handleClickConnect()
      }, 3000)
    }
  },
  methods: {
    async handleClickConnect () {
      var provider = await this.baseModel.connect()
      console.log('provider', provider)
      if (provider) {
        this.provider = provider
      }
    },
    handleClickDisconnect () {
      this.baseModel.disconnect(this.provider)
      this.provider = ''
    },
  }
}
</script>
<style scoped>
.ex-main {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
}
.ex-main .ex-main-box {
  width: 300px;
  display: flex;
  justify-content: center;
}
.ex-main .ex-main-box button {
  height: 30px;
  background: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```

## 提供商订阅事件

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


### 更新日志

#### 2022.02.21

> v1.0.0  
> 初始化项目版本
> 支持 MetaMask，WalletConnect

#### 2022.03.12

> v1.1.3 
> 添加支持 fortmatic, binance, portis
> 增加对遮罩背景色定制
> 模态框背景色自定义
> 模态框边框颜色自定义

#### 2022.03.19

> v1.1.6 
> 添加支持 fortmatic, binance, portis


## Features

- [v] Built for Ethereum using [Web3](https://github.com/ethereum/web3.js/).
- [v] Implements [Graph Protocol](https://github.com/graphprotocol) to read blockchain.


## other

- Etherscan: https://etherscan.io/apis
- Infura: https://infura.io/
- ETH Gas Station: https://docs.ethgasstation.info/
- Imgix: https://www.imgix.com/


[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/
