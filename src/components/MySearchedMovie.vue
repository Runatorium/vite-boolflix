<script>

import { store } from '../store.js';

export default{
    name: 'MySearchedMovie',

    data() {
            return {
              store
            }
          },
}
</script>


<template>
    <div class="box">
            <div v-for="(movie, index) in store.searchedMovie" class="movie">
                <h1>{{movie.title}}</h1>
                <h3>{{movie.original_title}}</h3>
                <p>{{movie.original_language}}</p>
                <h4>{{movie.vote_average}}</h4>
            </div>
    </div>
</template>



<style scoped>
.box{
    display: flex;
    flex-wrap: wrap;
    
}
.movie{
    border: solid 2px black;
    width: calc(100% / 6);
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: bisque;
    
}

</style>


