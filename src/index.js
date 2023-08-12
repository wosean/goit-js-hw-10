import { fetchBreeds, fetchCatByBreed} from "./cat-api";
import Notiflix from "notiflix";

// import SlimSelect from 'slim-select'
// import 'slim-select/dist/slimselect.css';
// new SlimSelect({
//   select: '.breed-select',
// })

const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loader = document.querySelector(".loader");
// let breeds = {};

breedSelect.addEventListener("change", fetchCatInfo);

fetchBreeds()
.then((data) => renderMarkup(data))
.catch(() => {
    Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
});

function renderMarkup(data) { 
  // const breeds = data;
  breedSelect.classList.remove("hidden");
  loader.classList.add("hidden");
  
  breedSelect.innerHTML = data.reduce((html,el) => {
      return html+`<option value="${el.id}">${el.name}</option>`
    },"");  
}

function fetchCatInfo() {

  catInfo.classList.add("hidden");
   loader.classList.remove("hidden");

  const selectedValue = breedSelect.value;

  fetchCatByBreed(selectedValue)
  .then((data) => renderCatInfo(data))
  .catch(() => {

      Notiflix.Notify.failure("Oops! Something went wrong! Try reloading the page!");
  });
}

function renderCatInfo(data) {
    
  catInfo.classList.remove("hidden");
  loader.classList.add("hidden");
  

  const name = data[0].breeds[0].name;
  const description = data[0].breeds[0].description;
  const temperament = data[0].breeds[0].temperament;
 
  const markup = `<img src="${data[0].url}" alt="${name}" width="350">
  <div>
  <h3>${name}</h3>
      <p>${description}</p>
      <p><span class="temper">Temperament: </span>${temperament}</p>
      </div>`
  catInfo.innerHTML = markup;
}
















// const refs = {
//   selectEl: document.querySelector(".breed-select"),
//   loaderEl: document.querySelector("loader"),
//   errorEl: document.querySelector("error"),
//   catInfoEl: document.querySelector("cat-info"),
// };
// //  console.log(refs.selectEl);
// refs.selectEl.addEventListener("change", onSelectChange);

// fetchBreeds()
//   .then(data => {
//     refs.selectEl.innerHTML = createCatListMarkup(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// function onSelectChange(e) {
//     //  console.log(e.currentTarget.value);
//   console.log(e.currentTarget.value);
//   fetchCatByBreed(e.currentTarget.value)
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// function createCatListMarkup(arr) {
//   return arr
//     .map(({ id, name }) => `<option value="${id}">${name}</option`)
//     .join("");  
// }

// function createCatSampleMarkup(arr) {
//   return arr
//     .map(({ id, name }) => `<option value="${id}">${name}</option`)
//     .join("");  
// }


// function serviceThecatapi(breeds, id) {
//   const BREEDS_URL = "https://api.thecatapi.com/v1/breeds";
//   // const END_POINT = "/images/search";
//   const API_KEY = "live_ZSJucVadXztEO3K4H3zxoMJ8ilbsQ86CGhdAoVO2MdRRA7Gzn41Un0ja1d7lKLeg";

//   const params = new URLSearchParams({
//     // endPoint: END_POINT,
//     key: API_KEY,
//     breeds,
//     id,
//     // lang: "uk", 
//   });

//   return fetch(`${BREEDS_URL}?${params}`).then((res) => {
//     //  console.log(res);
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   });
// }

// serviceThecatapi()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));






// const promise = fetch("https://api.thecatapi.com/v1/breeds")
// console.log(promise);

// fetch("https://api.thecatapi.com/v1/breeds").then((res) =>
//     console.log(res)
// );

//  !!! Тільки так !!! (щоб не було ERROR)
// получили array (67) cats через внутрішню функцію "json"
// fetch("https://api.thecatapi.com/v1/breeds")
//     .then((res) => res.json())
//     .then((res) => console.log(res));

// *** Обробка помилок та парсинг відповіді *** \\
// fetch("https://api.thecatapi.com/v1/breeds").then((res) => {
//     console.log(res);
//     if (!res.ok) {
//         throw new Error("Примусово закидуємо значення у catch");
//     }
//     return res.json();     
// })
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));