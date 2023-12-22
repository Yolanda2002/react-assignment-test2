import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {removeFavorite} from '../../api/favorate-api';

const RemoveFromFavoritesIcon = ({ movie, setMovieIds }) => {

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    removeFavorite({movieId:movie.id})
    .then(() => {
      setMovieIds?.(v => v.filter(x => x !== movie.id))
    })
    .catch(err =>{});
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;