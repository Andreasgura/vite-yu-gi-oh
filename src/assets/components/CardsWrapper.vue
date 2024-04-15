<template>
    <div class="container p-4 as">
        <div class="top-wrapper">
            top wrapper
        </div>
        <div class="main-wrapper container ">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 p-3"
                v-for="(character, index) in store.characters" :key="index">
                    <CardComponent :image="character.card_images[0].image_url_small" :title="character.name" :specific1="character.archetype" />
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
    import CardComponent from './CardComponent.vue'
    import {store} from '/src/store.js'
    export default {
        name: 'CardsWrapper',
        components: {
            CardComponent
        },
        data() {
            return {
                store
            }
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