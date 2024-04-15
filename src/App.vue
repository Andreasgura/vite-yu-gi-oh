<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
  import HeaderComponent from './assets/components/HeaderComponent.vue'
  import MainComponent from './assets/components/MainComponent.vue'
  import axios from 'axios'
  import {store} from './store.js'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data(){
      return {
        store,
      }
    },
    methods: {
      apiRequest(){
        axios.get(this.store.apiUrl).then((response) => {
          console.log(response.data);
          this.store.characters = response.data.data
        })
      }
    },
    created(){
      this.apiRequest()  
    }
  }
</script>

<style lang="scss" scoped>

</style>