<template>
    <main>
        <div class="container">
            <CardsWrapper />
        </div>
    </main>
</template>

<script>
    import CardsWrapper from './CardsWrapper.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardsWrapper,
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
main {
    background-color: $mainbg;
}
</style>