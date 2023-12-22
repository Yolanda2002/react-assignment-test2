import React, { useState, useEffect, useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import { getFavorites } from "../api/favorate-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  const {favorites} = useContext(MoviesContext)
  const [movieIds, setMovieIds] = useState([]);
  useEffect(() => {
    getFavorites().then(res => {
      setMovieIds(res?.map(v => v.movie_id))
    })
  }, [favorites])
  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  
  const movies = favoriteMovieQueries.filter(v => movieIds.includes(v.data.id)).map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  // const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} setMovieIds={setMovieIds} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;