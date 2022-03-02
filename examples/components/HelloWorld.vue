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
// import '../../lib/eth-wallet-modal.css'
// import Base from '../../lib/eth-wallet-modal.umd.min.js'
import Base from '../../packages/index'
// import getUrlParameters from 'webpack-build-tools-test';
// import Base from 'eth-wallet-modal';

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
          logo: WalletConnectLogo
        },
        walletconnect: {
          rpc: {
            1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
            4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
          },
          chainId: 4,
          bridge: 'https://bridge.walletconnect.org'
        },
        coinbase: {
          infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
          chainId: 4,
          appName: 'Digi',
          appLogoUrl: 'https://www.logodesign.net/logo/abstract-line-forming-two-trees-51ld.png?size=2&industry=nature',
          darkMode: false
        }
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
