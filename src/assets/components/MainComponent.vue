<template>
    <main class="py-4">
        <div class="container">
            <CardsWrapper />
            <MorePages @nextpage="loadmore()"/>
        </div>
    </main>
</template>

<script>
    import CardsWrapper from './CardsWrapper.vue'
    import MorePages from './MorePages.vue'
    import {store} from '/src/store.js'
    export default {
        name: 'MainComponent',
        components: {
            CardsWrapper,
            MorePages,
        },
        methods : {
            // loadmore() {
            // this.store.apiUrl = this.store.meta.next_page
            // this.apiRequest()
        }
        }
    
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
main {
    background-color: $mainbg;
}
</style>