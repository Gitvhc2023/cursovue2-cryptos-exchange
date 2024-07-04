<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script> -->
<template>
  <div>
    <!-- <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" /> -->
    <ring-loader :loading="isLoading" :color="'#68d391'" :size="100"></ring-loader>
    <change-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import ChangeAssetsTable from '@/components/ChangeAssetsTable'

export default {
  name: 'Home',

  components: { ChangeAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: []
    }
  },

  created() {
    this.isLoading = true

    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>
