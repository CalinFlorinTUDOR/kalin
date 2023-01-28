const listResult = document.querySelector('[data-js="list_result"]');
const searchInput = document.querySelector('[data-js="search_input"]');
const errorSearch = document.querySelector('[data-js="error_text"]');

const fetchInfo = async(NAME) => {

  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${NAME}`);
  const data = await res.json();
  data.length > 0 ? showMovies(data) : errorSearch.classList.remove('hidden');
  
};

const showMovies = (movies) => {

  movies.map ((item) => {
    const show = document.createElement('div');
    show.innerHTML = `
    <h2>${item.show.name}</h2>
    <img src="${item.show.image.medium}" alt="${item.show.name}">
    ${item.show.summary}
    ${item.show.genres}
    `
    listResult.appendChild(show);

  });

};

searchInput.addEventListener('input', (e) => {

  listResult.innerHTML = '';
  errorSearch.classList.add('hidden');
  fetchInfo(e.target.value);

});