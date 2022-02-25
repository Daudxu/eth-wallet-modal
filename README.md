<h1 align="center">
   ETH Wallet Modal 2020
</h1>

[![npm][npm]][npm-url]
[![node][node]][node-url]

<h2 align="center">
  Ethereum provider solution for metamask/walletconnect Wallets
</h2>

## Preview

![preview](./images/preview.png)

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

const providerOptions = {
       sysOptions: {
          logp: 'your logo'
        },
        walletconnect: {
          rpc: {
            1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
          },
          chainId: 4,
          bridge: 'https://bridge.walletconnect.org'
        }
        ....
};

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
      Dapp ETH Wallet Model plugin.
    </p>
    <div class="ex-main">
      <div class="ex-main-box">
        <button @click="handleClickConnect">Click Connect</button>
        <button @click="handleClickDisconnect">Click disconnect</button>
      </div>
    </div>

  </div>
</template>

<script>
import ethWalletModeal from 'eth-wallet-modal'

import WalletConnectLogo from "../assets/walletconnect-circle.svg";

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
        sysOptions: {
          logp: WalletConnectLogo
        },
        walletconnect: {
          rpc: {
            1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
          },
          chainId: 4,
          bridge: 'https://bridge.walletconnect.org'
        }
      }
    }
  },
  created () {
    this.baseModel = new eth-wallet-modal(this.providerOptions)
  },
  methods: {
    async handleClickConnect () {
      var provider = await this.baseModel.connect()
      this.provider = provider
      console.log("provider", provider)
    },
    handleClickDisconnect () {
      this.baseModel.disconnect(this.provider)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  justify-content: space-between;
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
        sysOptions: {
          logp: WalletConnectLogo
        },
        walletconnect: {
          rpc: {
            1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
          },
          chainId: 4,
          bridge: 'https://bridge.walletconnect.org'
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

- [x] Built for Ethereum using [Web3](https://github.com/ethereum/web3.js/).
- [x] Implements [Graph Protocol](https://github.com/graphprotocol) to read blockchain.

## Changelog

### 2022.02.21

> v1.0.0 \* init

[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/
