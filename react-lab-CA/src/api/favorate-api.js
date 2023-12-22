import {myFetch} from '../util'

export const addFavorite = (data) => {
  return myFetch(`http://localhost:8080/api/collect/add`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "authorization": sessionStorage.getItem('token')
    },
    body:JSON.stringify(data)
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const removeFavorite = (data) => {
  return myFetch(
    `http://localhost:8080/api/collect/delete`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": sessionStorage.getItem('token')
      },
      body:JSON.stringify(data)
    }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};


export const getFavorites = (data) => {
  return myFetch(
    `http://localhost:8080/api/collect/list`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": sessionStorage.getItem('token')
      },
      body:JSON.stringify(data)
    }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};