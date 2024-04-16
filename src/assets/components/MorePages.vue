<template>
    <div class="d-flex justify-content-between m-3  ">
       
        <div class="btn btn-dark " @click="$emit('nextpage')">
            Next page
        </div>
    </div>
</template>

<script>
import {store} from '../../store.js'
export default {
    name: 'MorePages',
    data() {
        return {
            store
        }
    },
    methods : {
        
        
    }
}
</script>

<style lang="scss" scoped></style>