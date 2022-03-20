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

import Bean from "../assets//Bean.gif";

import WalletConnectLogo from "../assets/logos/walletconnect-circle.svg";

import MetaMaskLogo from "../assets/logos/metamask.svg";

import CoinbaseLogo from "../assets/logos/coinbase.svg";

import BlockWalletLogo from "../assets/logos/BlockWallet.png";

import FortmaticLogo from "../assets/logos/fortmatic.svg";

import BinancechainwalletLogo from "../assets/logos/binancechainwallet.svg";

import PortisLogo from "../assets/logos/portis.svg";

import BurnerwalletLogo from "../assets/logos/burnerwallet.png";

import TorusLogo from "../assets/logos/torus.svg";

import AuthereumLogo from "../assets/logos/authereum.svg";

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
        logo: Bean,
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
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
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
              infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
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
              key:'pk_test_E652525CA4198573'
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
                chainName: 'rinkeby', 
                id:'c668f1f8-ffc6-493e-86a1-b5c41d721ad9'
            }
          },
          burnerconnect: {
            displayView: {
              logo: BurnerwalletLogo,
              name: "burner connect",
            },
            options: {
              defaultNetwork: 4,
              chainId: 4
            }
          },
          torus: {
            displayView: {
              logo: TorusLogo,
              name: "torus",
            }
          },
          authereum: {
            displayView: {
              logo: AuthereumLogo,
              name: "authereum",
            },
            options: {
                chainName: 'rinkeby', 
            }
          },
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
