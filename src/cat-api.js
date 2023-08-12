import axios from "axios";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common["x-api-key"] = "live_ZSJucVadXztEO3K4H3zxoMJ8ilbsQ86CGhdAoVO2MdRRA7Gzn41Un0ja1d7lKLeg";

import Notiflix from "notiflix";

export {fetchBreeds};
export {fetchCatByBreed};

function fetchBreeds() {

  return axios.get('breeds')
    .then(response => {

      return response.data;
    })
}

function fetchCatByBreed(breedId) {
  
  return axios.get(`images/search?breed_ids=${breedId}`)
  .then(response => {

    return response.data;
  })
  .catch(error => {

    Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
  });
}


