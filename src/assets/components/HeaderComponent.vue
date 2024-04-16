<template>
    <header>
        <div class="d-flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/800px-Yu-Gi-Oh%21_%28Logo%29.jpg?20160216230530"
                alt="">
            <h1>Yu-Gi-Oh API</h1>
        </div>
       
        <select class="form-select">
            <option selected>Filtra per archetipo</option>
            <option :value="archetype.archetype_name"
            v-for="(archetype, index) in this.store.archetypeList" :key="index" @change="$emit('changearchetype')">
                {{archetype.archetype_name}}
            </option>

        </select>

    </header>
</template>

<script>
import {store} from '/src/store.js'
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
        }
    },

}
</script>

<style lang="scss" scoped>
img {
    width: 80px;
    padding: 20px;
    margin-right: 20px;
}
</style>