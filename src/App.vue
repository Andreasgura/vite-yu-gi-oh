<template>
  <div class="apiloader d-flex justify-content-center align-items-center"  
  v-if="loading">
    <i class="fa-solid fa-spinner fa-spin"></i>
  </div>
  <div v-else>
    <HeaderComponent />
    <MainComponent />
  </div>
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
        loading: true
      }
    },
    methods: {
      apiRequest(){
        this.loading = true
        axios.get(this.store.apiUrl).then((response) => {
          console.log(response.data);
          this.store.characters = response.data.data
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          this.loading = false
        })
      }
    },
    created(){
      this.apiRequest()  
    }
  }
</script>

<style lang="scss" scoped>
.apiloader{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-size: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>