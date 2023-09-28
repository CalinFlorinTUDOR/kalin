const listResult = document.querySelector('[data-js="list_result"]');
const searchInput = document.querySelector('[data-js="search_input"]');
const errorSearch = document.querySelector('[data-js="error_text"]');

const fetchInfo = async (NAME) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${NAME}`);
    const data = await res.json();
    const filteredData = filterShowsWord(data, 'show');
    const capitalizedData = capitalizeWordData(filteredData, 'robot');
  if (capitalizedData.length > 0) {
        showShows(capitalizedData);
    } else { 
        errorSearch.classList.remove('hidden');
    }
    
  } catch (err){
    console.error('Error fetching data:', err);}
};

const filterShowsWord = (data, word) => {
  const lowercaseWord = word.toLowerCase();
  return data.filter((item) => item.show.name.toLowerCase().includes(lowercaseWord) || item.show.summary.toLowerCase().includes(lowercaseWord));
};

const capitalizeWordData = (data, wordToCapitalize) => {
  return data.map((item) => {
    const show = { ...item.show };
    show.name = capitalizeWordString(show.name, wordToCapitalize);
    show.summary = capitalizeWordString(show.summary, wordToCapitalize);
    return { ...item, show };
  });
};

const capitalizeWordString = (str, wordToCapitalize) => {
  const regex = new RegExp(`\\b${wordToCapitalize}\\b`, 'gi');
  return str.replace(regex, (match) => match.toUpperCase());
};

const showShows = (shows) => {
  listResult.innerHTML = '';

  shows.forEach((item) => {
    const showContainer = document.createElement('div');
    showContainer.classList.add('show-details');
    
    showContainer.innerHTML = `
      <img src="${item.show.image.medium}" alt="${item.show.name}">
      <div>
        <h2>${item.show.name}</h2>
        <p><strong>Rating:</strong> ${item.show.rating.average || 'N/A'}</p>
        <p><strong>Genres:</strong> ${item.show.genres.join(', ')}</p>
        <p><strong>Description:</strong> ${item.show.summary}</p>
      </div>
    `;
    
    listResult.appendChild(showContainer);
  });
};

searchInput.addEventListener('input', (e) => {
  listResult.innerHTML = '';
  errorSearch.classList.add('hidden');
  fetchInfo(e.target.value);
});
