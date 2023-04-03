<script>

import { toNumber } from '@vue/shared';
import { store } from '../store.js';

export default{
    name: 'MySearchedMovie',

    data() {
            return {
              store
            }
          },
          methods:{
          calcvote(vote){
            let voto = Math.ceil(vote / 2).toFixed(1) ;
            return  voto
          }
            
          }

}
</script>


<template>
    <div>
        <h2 v-if="store.searchedMovie.length > 0"> Movies</h2>
    </div>
    <div class="box">
            <div v-for="(movie) in store.searchedMovie" class="movie">
                <img v-if="movie.poster_path !== 'null'" :src="store.movieurl + movie.poster_path" alt="">
                <img v-else src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fentertainment.ie%2Fperson%2Fadrienne-frame-310866&psig=AOvVaw3p-xDGovP2B1ZpbicqU5Ol&ust=1680617055257000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCsr8bwjf4CFQAAAAAdAAAAABAF" alt="">
                <h1>{{movie.title}}</h1>
                <h3>{{movie.original_title}}</h3>
                <span :class="store.standard + movie.original_language"></span>
                <h4 v-text="calcvote(movie.vote_average)"></h4>
            </div>
    </div>
</template>



<style scoped>
.box{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

h1{
 font-size: 20px;
}
h3{
    font-size: 14px;
}
span{
    align-self: center;
}
.movie{
    border: solid 2px rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    width: calc(100% / 6);
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 300px;
    justify-content: space-between;
}

</style>


