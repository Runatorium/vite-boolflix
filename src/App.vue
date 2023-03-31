<script>
import MainComponent from './components/MainComponent.vue'
import { store } from './store.js';
import axios from 'axios'

export default{ 
      components: {
        MainComponent,
      },

      async mounted() {
      try { 
          const result = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=cfa9c9067bc907e38a40f33250b3a14d`);
          this.store.SuggestedMovieList = result.data.results;
          console.log(this.store.SuggestedMovieList)
          }  catch(e){
          console.log(e)
          }
        },

      data() {
           return {
              store
              
            }
          },
}

</script>

<template>
  <h1>{{ store.API }}</h1>

</template>

<style lang="scss">

@use './styles/general.scss'  

</style>
