import {country} from "./country.js"
const genderUrl = 'https://api.genderize.io';
const countryUrl = 'https://api.nationalize.io';

function detectedUser() {
  const firstName = document.querySelector('.firstName').value
  let url = `${genderUrl}?name=${firstName}`
  if (!firstName) return

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    result.innerHTML = `${data.name} is ${data.gender}`
  })

  url = `${countryUrl}?name=${firstName}`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    function getCountryName(countryCode) {
      if (country.hasOwnProperty(countryCode)) {
          return country[countryCode];
      } else {
          return countryCode;
      }
    }
    result.innerHTML += `, ${getCountryName(data.country[0].country_id)}`
  })
}
btn.addEventListener('click', detectedUser)
// country[data.country[0].country_id]
