<template>
  <div class="eth-warp" id="eth-warp"
       v-show="isShow" >
    <div class="eth-main" >
      <div class="eth-close"> <span class="eth-close-box"
              @click="closeModel"> </span></div>
      <div class="eth-main-wallet">
        <Provider :userOptions={userOptions}>
        </Provider>
      </div>
    </div>
  </div>
</template>
<script>


import Provider from "../components/Provider";
export default {
  name: 'Modal',
  components: {
    Provider
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    userOptions: {
      type: Object,
      default: () => ({})
    },
    resetState: {
      type: Object,
      default: () => ({})
    },
  },
  data () {
    return {
      isShow: this.show,
      walletType: '',
    };
  },
  methods: {
    closeModel () {
       this.isShow = false
    },
    connect () {

    }
  }
}

</script>

<style  scoped>
.eth-warp {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(30, 30, 30, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.eth-warp .eth-main {
  border: 1px solid #faba30;
  border-radius: 5px;
  width: 450px;
  padding: 30px 30px 50px 30px;
  background: #363636;
}
.eth-warp .eth-main .eth-close {
  display: flex;
  justify-content: right;
  margin-bottom: 20px;
}
.eth-warp .eth-main .eth-close span {
  background: url("../assets/images/close.png") no-repeat;
  height: 24px;
  width: 24px;
  cursor: pointer;
}

.eth-warp .eth-main .eth-main-wallet {
  color: #faba30;
}
.cl-bottom {
  margin-bottom: 20px;
}
.eth-main-wallet .cl-connect-btu {
  width: 390px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  color: #000000;
  text-align: left;
  color: #fff;
  font-size: 16px;
}

.eth-main-wallet .img-MetaMask {
  margin-right: 17px;
}
.eth-main-wallet .img-WalletConnect {
  margin-right: 14px;
}
</style>