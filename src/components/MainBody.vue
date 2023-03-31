<script>
import { store } from '../store.js';


export default{
    name: 'MainBody',

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
      <h1>{{movie.title}}</h1>s
      <h3>{{movie.original_title}}</h3>
      <p>{{movie.original_language}}</p>
      <h4>{{movie.vote_average}}</h4>
    </div>
  </div>
  
</template>

<style scoped>

</style>
