<template>
    <div class="card mb-4 ">
        <img :src="image" :alt="title" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
        </div>
        
        <ul >
            <li class="list-group-item">{{specific1}}</li>
        </ul>

    </div>
</template>

<script>

export default {
    name: 'CardComponent',
    props: {
        image: String,
        title: String,
        specific1: String
    }


}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.card,
ul {
    background-color: $mainbg;
    color: white;
}
li {
    color: black;
}
.card {
    height: 500px;
}
</style>