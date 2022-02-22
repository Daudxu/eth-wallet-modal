
<template>
  <div>
    <div class="cl-connect"
         v-for="(item, index) in userOptions.userOptions"
         :key="index">
      <button class="cl-connect-btu"
                onClick={item.onClick}>
               <img :src="item.logo" alt={item.name}     class="img-WalletConnect">
        MetaMask
      </button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'Provider',
  props: {
    userOptions: {
      type: Object,
      default: () => ({})
    },
  },
  mounted(){
  console.log('userOptions',this.userOptions.userOptions)
  },
  methods: {
  on (event, callback) {
    this.eventController.on({
      event,
      callback
    });

    return () =>
      this.eventController.off({
        event,
        callback
      });
  },
  off (event, callback) {
    this.eventController.off({
      event,
      callback
    });
  }
  }
}

</script>

