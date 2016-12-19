export const showSearchResults = (searchResults) => ({
    type: 'SHOW_SEARCH_RESULTS',
    searchResults
  }
);

export const fetchByTitle = (query) => {
  return () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
          .then(res => res.json())
          .then(({results}) => {
            let searchResults = results.map(({id, poster_path, title}) => (
              {
                id,
                poster_path,
                title
              }
            ));
            dispatch(showSearchResults(searchResults));
          })
          .catch(e => e.message)
  }
};
