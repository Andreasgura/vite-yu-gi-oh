<template>
    <div class="container py-4 as">
        <div class="top-wrapper">
            <div class="prova mx-2 p-4 ">
                Found {{store.meta.total_rows}} cards
            </div>
        </div>
        <div class="main-wrapper container ">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 gx-3"
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
 }
 .prova {
       background-color: black;
       color: white;
   }
</style>