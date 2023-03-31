
<template>
  <MyHeader @SearchMovie="doSearch"></MyHeader>
</template>




<script>
import MainComponent from './components/MainComponent.vue'
import MyHeader from './components/MyHeader.vue';
import { store } from './store.js';
import axios from 'axios'

export default{ 
      components: {
        MainComponent,
        MyHeader,
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
          methods:{
            doSearch(){
              console.log(store.search);
              store.search = "";
            }
          }
}

</script>

<style lang="scss">

@use './styles/general.scss'  

</style>
