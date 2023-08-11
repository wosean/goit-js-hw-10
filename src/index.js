 import axios from "axios";

 axios.defaults.headers.common["x-api-key"] = "live_ZSJucVadXztEO3K4H3zxoMJ8ilbsQ86CGhdAoVO2MdRRA7Gzn41Un0ja1d7lKLeg";

import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
new SlimSelect({
  select: '.breed-select',
})



function serviceThecatapi(breeds, id) {
  const BREEDS_URL = "https://api.thecatapi.com/v1/breeds";
  // const END_POINT = "/images/search";
  const API_KEY = "live_ZSJucVadXztEO3K4H3zxoMJ8ilbsQ86CGhdAoVO2MdRRA7Gzn41Un0ja1d7lKLeg";

  const params = new URLSearchParams({
    // endPoint: END_POINT,
    key: API_KEY,
    breeds,
    id,
    // lang: "uk", 
  });

  return fetch(`${BREEDS_URL}?${params}`).then((res) => {
     console.log(res);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

// serviceThecatapi('BreedsAB', 'abys')
serviceThecatapi()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));






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