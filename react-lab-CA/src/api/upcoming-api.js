export const addUpcoming = (data) => {
  return fetch(`http://localhost:8080/api/palylist/add`, {
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

export const getUpcomings = (data) => {
  return fetch(
    `http://localhost:8080/api/palylist/list`, {
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