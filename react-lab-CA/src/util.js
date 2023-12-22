import truncate from "lodash/truncate";

export function excerpt(string) {
  return truncate(string, {    
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

export function myFetch(url, params) {
  if(!sessionStorage.getItem('token')){
    return window.location.replace ('/login');
  }else{
    return fetch(url, params)
  }
}