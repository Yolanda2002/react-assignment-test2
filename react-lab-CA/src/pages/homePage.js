import React, { useContext, useEffect, useState } from "react";
import { getMovies } from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import {getFavorites} from '../api/favorate-api'

const HomePage = (props) => {
  const { isLogin, setFavorites } = useContext(MoviesContext)
  const [movieIds, setMovieIds] = useState([])

  const { data, error, isLoading, isError } = useQuery('discover', getMovies)

  useEffect(() => {
    if(isLogin){
      getFavorites().then(res => {
        setFavorites(res?.map(v => v.movie_id))
      })
    }
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default HomePage;