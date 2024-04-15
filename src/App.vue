<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
  import HeaderComponent from './assets/components/HeaderComponent.vue'
  import MainComponent from './assets/components/MainComponent.vue'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>