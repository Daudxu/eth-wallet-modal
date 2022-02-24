<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      this plugin is Dapp wallet model Demo,
    </p>
    <button @click="handleClickConnect">Click Connect</button>

  </div>
</template>

// <script>
// import '../../lib/vue-eth-wallet-model.css'
// import Base from '../../lib/vue-eth-wallet-model.umd.min.js'
import Base from '../../packages/index'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      baseModel: '',
      providerOptions: {
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
    this.baseModel = new Base(this.providerOptions)
  },
  methods: {
    connect (provider) {
      console.log(provider)
    },
    async handleClickConnect () {
      var provider = await this.baseModel.connect()
      console.log(provider)
      // this.$refs.ethWalletModelRef.connectModel();
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
