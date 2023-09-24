const container = document.querySelector('.container');

async function getEuroCountries() {
  const response = await fetch(`https://restcountries.com/v2/regionalbloc/eu`);
  const data = await response.json();
  console.log(data);
  return data;
}

async function displayEuroCountries() {
  const countries = await getEuroCountries();
  countries.forEach(country => {
    const countryProperties = `
      <div class="country-container">
        <img class="img-flag" width= '300' height='200' border= '3px solid black' src="${country.flags.png}"/>
    <h3 class="country-name">${country.name}</h3>
    </div>
    `;
  container.insertAdjacentHTML('afterbegin', countryProperties);
  const countryContainer = document.querySelector('.country-container');

  countryContainer.addEventListener('click',function() {
    container.innerHTML = '';

    const countryProperties = `
    <div class="country-container">
        <img class="img-flag" width= '300' height='200'  border= '3px solid black' src="${country.flags.png}"/>
    <h3 class="country-name">${country.name}</h3>
    <h3>Country Code: ${country.alpha3Code}</h3>
    <h3 class="capital">Capital: ${country.capital === undefined ? 'No capital' : country.capital}</h3>
    <h3>Language: ${!Object.values(country.languages) ? 'No Language' : Object.values(country.languages)[0].name}</h3>
    <h3>Currency: ${Object.values(country.currencies[0])}</h3>
    <h3>CallingCode: ${Object.values(country.callingCodes)}</h3>
    <h3>Borders: ${Object.values(country.borders)}</h3>
    
    
    </div>
    `;
    container.insertAdjacentHTML('afterbegin', countryProperties);

  });

});

}
displayEuroCountries();



