<script>
import { toNumber } from '@vue/shared';
import { store } from '../store.js';

export default{
    name: 'MySearchedMovie',

    data() {
            return {
              store,
            }
          },
          methods:{
          calcvote(vote){
            let nstars = "";
            let voto = Math.ceil(vote / 2).toFixed(1) ;
            for(let index=0; index<5; index++){
                if(index < voto){
                    nstars += '<i class="fa-solid fa-star"></i>'
                }else{
                    nstars += '<i class="fa-regular fa-star"></i>'
                } 
            }
            return nstars;
          },
            
          checklang(toCheck){
            if(toCheck == 'en'){
                toCheck = 'gb'
            }else if(toCheck == 'ja'){
                toCheck = 'jp'
            }
            return toCheck;
          },
          movieposter(urlToCheck){
            let finalUrl = "";
            if(urlToCheck == null){
               finalUrl += "../../public/standardlogo.png"
            }else{
                finalUrl = store.movieurl
                finalUrl += urlToCheck
                console.log(finalUrl)
            }
            return finalUrl;
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
                <img :src="movieposter(movie.poster_path)" alt="">
                <h1>{{movie.title}}</h1>
                <h3>{{movie.original_title}}</h3>
                <span :class="store.standard + checklang(movie.original_language)"></span>
                <h4 v-html="calcvote(movie.vote_average)"></h4>
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


