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
    <div class="background-color">
        <div class="title">
            <h2 v-if="store.searchedMovie.length > 0"> Movies</h2>
        </div>
        <div class="container">
            <div class="box">
                    <div :style="{backgroundImage: `url(${movieposter(movie.poster_path)})`}" v-for="(movie) in store.searchedMovie" class="movie">
                        <div class="overlay"></div>
                        <div class="details">
                            <h1>{{movie.title}}</h1>
                            <h3>{{movie.original_title}}</h3>
                            <span :class="store.standard + checklang(movie.original_language)"></span>
                            <h4 v-html="calcvote(movie.vote_average)"></h4>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>




<style scoped>
.movie:hover .overlay{
    display: block;
}
.movie:hover .details{
    display: block;
    color: white;
}
.overlay{
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0);
}
.details{
    display: none;
    width: 100%;
    padding: 5px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}
.background-color{
 background-color: rgb(91, 91, 91);
}

.title{
    color: white;
    margin-left: 18%;
}
.container{
    width: 100%;
    display: flex;
}
.box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    margin: 5px;
    position: relative;
    border: solid 2px rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    width: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 300px;
    justify-content: space-between;
    background-size: cover;
}

</style>


