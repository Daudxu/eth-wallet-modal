<h1 align="center">
   ETH Wallet Modal
</h1>

[![npm][npm]][npm-url]
[![node][node]][node-url]

<h2 align="center">
Ethereum provider solution for  Wallets and Dapp
</h2>

## Current support
metamask, walletconnect, coinbase,  blockmallet

## Preview

![preview](./images/preview.png)

## example
https://daudxu.github.io/eth-wallet-modal/

## Usage

### 1. Install eth-wallet-modal NPM package

```

npm install --save eth-wallet-modal

# OR

yarn add eth-wallet-modal

```

### 2. Install Provider packages

```
import ethWalletModal from 'eth-wallet-modal';


```

### 3. Then you can add eth-wallet-modal to your Dapp as follows

```
import Web3 from "web3";
import ethWalletModal from "eth-wallet-modal";

const  providerOptions = {
        logo: WalletConnectLogo,
        chainId: 4,
        walletOptions: {
          metamask: {
            displayView: {
              logo: MetaMaskLogo,
              name: "metamask",
            },
            options: {}
          },
          walletconnect: {
            displayView: {
              logo: WalletConnectLogo,
              name: "walletconnect",
            },
            options: {
              rpc: {
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
              },
              chainId: 4,
              bridge: 'https://bridge.walletconnect.org'
            }
          },
          coinbase: {
            displayView: {
              logo: CoinbaseLogo,
              name: "coinbase",
            },
            options: {
              infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
              chainId: 4,
              appName: 'Digi',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          }
        },

      }

const eth-wallet-modal = new eth-wallet-modal(providerOptions);

const provider = await eth-wallet-modal.connect();

const web3 = new Web3(provider);

```

## demo

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
        chainId: 4,
        walletOptions: {
          metamask: {
            displayView: {
              logo: MetaMaskLogo,
              name: "metamask",
            },
            options: {}
          },
          walletconnect: {
            displayView: {
              logo: WalletConnectLogo,
              name: "walletconnect",
            },
            options: {
              rpc: {
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
              },
              chainId: 4,
              bridge: 'https://bridge.walletconnect.org'
            }
          },
          coinbase: {
            displayView: {
              logo: CoinbaseLogo,
              name: "coinbase",
            },
            options: {
              infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
              chainId: 4,
              appName: 'Digi',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          }
        },

      }
    }
  },
  created () {
    this.baseModel = new Base(this.providerOptions)
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

## Options

| name            | type     | description           |
| --------------- | -------- | --------------------- |
| providerOptions | object   | see description below |
| connect         | function |                       |
| disconnect      | function | provider              |

providerOptions providerOptions

```
eg:
 providerOptions: {
        logo: "your logo",
        chainId: 4,
        walletOptions: {
          metamask: {
            displayView: {
              logo: 'metamask logo',
              name: "metamask",
            },
            options: {}
          },
          walletconnect: {
            displayView: {
              logo: 'walletconnect logo',
              name: "walletconnect",
            },
            options: {
              rpc: {
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
              },
              chainId: 4,
              bridge: 'https://bridge.walletconnect.org'
            }
          },
          coinbase: {
            displayView: {
              logo: 'coinbase logo',,
              name: "coinbase",
            },
            options: {
              infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
              chainId: 4,
              appName:  your app name,
              appLogoUrl: coinbase app logo,
              darkMode: false
            }
          }
          ....
        },

      }
        ....

 walletconnect  config reference resources  https://docs.walletconnect.com/quick-start/dapps/web3-provider
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

> v1.0.0 \* init

## other

- Etherscan: https://etherscan.io/apis
- Infura: https://infura.io/
- ETH Gas Station: https://docs.ethgasstation.info/
- Imgix: https://www.imgix.com/

[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/
