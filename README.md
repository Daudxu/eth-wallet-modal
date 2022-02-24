
<h1 align="center">
   ETH Wallet Model
</h1>

<p align="center">
[![npm][npm]][npm-url]
[![node][node]][node-url]
</p>

##  Ethereum provider solution for metamask/walletconnect Wallets
## Installation

```
npm install vue-eth-wallet-model
```
## Usage
### Import

```
import 'vue-eth-wallet-model/vue-eth-wallet-model.min.css';
import { EthWalletModel } from 'vue-eth-wallet-model';
```

### demo

```
 /src/main.js   


import { createApp } from 'vue'
import App from './App.vue'
import '../lib/vue-eth-wallet-model.css'
import 'vue-eth-wallet-model/vue-eth-wallet-model.min.css';
import { EthWalletModel } from 'vue-eth-wallet-model';

const app = createApp(App);
app.use(EthWalletModel);
app.mount("#app");


```

```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      this plugin is Dapp wallet model Demo,
    </p>
    <button @click="handleClickConnect">Click Connect</button>
    <eth-wallet-model ref="ethWalletModelRef"
                      @connect="connect"
                      @closeConnectModel="closeConnectModel"></eth-wallet-model>
  </div>
</template>

<script>
// import EthWalletModel from '../packages/index'
// Vue.use(TagTextarea)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    connect (provider) {
      console.log(provider)
    },
    handleClickConnect () {
      this.$refs.ethWalletModelRef.connectModel();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

具体使用可参考[该文件](../../examples/landsTileMap.vue)。

## Options

| 配置项                  | 值类型   | 描述                                                                          |
| ----------------------- | -------- | ----------------------------------------------------------------------------- |
| providerOptions        | object    | providerOptions                                                  |
| connect           | function | Click wallet login to return provider  object                                        |
| closeConnectModel           | function | show/hide model box                                                 |

providerOptions providerOptions
```
eg:  
var providerOptions =
{
        network: "mainnet", // optional
        cacheProvider: true, // optional
        walletconnect: {
          options: {
            rpc: {
              1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
              4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
            },
            bridge: 'https://bridge.walletconnect.org'
          }
        }
 }

 walletconnect  config reference resources  https://docs.walletconnect.com/quick-start/dapps/web3-provider
```
## Provider Events

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

  - [X] Built for Ethereum using [Web3](https://github.com/ethereum/web3.js/).
  - [X] Implements [Graph Protocol](https://github.com/graphprotocol) to read blockchain.
## Changelog

### 2022.02.21

> v1.0.0 \* init 

[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/
