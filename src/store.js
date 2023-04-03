import { reactive } from 'vue';
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle'

export const store = reactive(
    {
        searchedShows: [],
        searchedMovie: [],
        movieurl: "http://image.tmdb.org/t/p/w500/",
        standard: "fi fi-",
        search: '',
    }
);