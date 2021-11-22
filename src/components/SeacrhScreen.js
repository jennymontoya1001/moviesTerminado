import React from 'react';
import { movies } from '../data/movies';
import { MovieCard } from './MovieCard';
import { useForm } from '../hooks/useForm';
import { useNavigate,useLocation } from 'react-router-dom';
import querystring from 'query-string';
import { getMoviesByName } from '../selectors/getMoviesByName';

export const SeacrhScreen = () => {

    const location = useLocation();
    const {q = ''} = querystring.parse(location.search);

    const navigate = useNavigate();

    const [values, handleInputChange] = useForm({
        searchText: q
    })

    const { searchText } = values;

    const moviesFiltered = getMoviesByName(searchText);


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
               
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
               
                    {
                        moviesFiltered.map(movie => (
                            <MovieCard key={movie.id}
                                {...movie} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
