<template>
  <div>
    <div class="cl-connect"
         v-for="(item, index) in userOptions"
         :key="index">
      <button class="cl-connect-btu"
              @click="connect('MetaMask')">
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

  methods: {
    connectModel () {

    },
    connect () {

    }
  }
}

</script>

