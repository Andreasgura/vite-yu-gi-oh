<template>
    <div class="container p-4 as">
        <div class="top-wrapper">
            top wrapper
        </div>
        <div class="main-wrapper container ">
            <div class="row">
                <div class="col-12 col-md-6 col-5 p-3">
                    <CardComponent />
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
    import CardComponent from './CardComponent.vue'
    export default {
        name: 'CardsWrapper',
        components: {
            CardComponent
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
 .container .as {
    background-color: white;

    .top-wrapper {
        background-color: $cardcontainerbg;
        color: white;
    }
 
 }
</style>