import { movies } from '../data/movies';


export const getMoviesByName = ( name = '' ) => {


    name = name.toLocaleLowerCase();
    return movies.filter( movie => movie.name.toLocaleLowerCase().includes( name )  );

}