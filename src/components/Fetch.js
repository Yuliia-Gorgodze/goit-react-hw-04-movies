const url = 'https://api.themoviedb.org/3/';
const apiKey = 'bc2e3bb065325884427f807b1a68aeb4';

const movieDetails = id => {
  return fetch(`${url}movie/${id}?api_key=${apiKey}&language=en-US`).then(
    res => {
      return res.json();
    },
  );
};
const getMovieList = movieID => {
  return fetch(`${url}movie/${movieID}/credits?api_key=${apiKey}`)
    .then(res => {
      return res.json();
    })
    .then(({ cast }) => {
      return cast;
    });
};

const getFilmByValue = search => {
  return fetch(`${url}search/movie?query=${search}&api_key=${apiKey}`)
    .then(res => {
      return res.json();
    })
    .then(({ results }) => {
      if (results.length === 0) {
        return Promise.reject(`Nothing found for your request: ${search}`);
      }
      return results;
    });
};
const getReviewsDetails = id => {
  return fetch(`${url}movie/${id}/reviews?api_key=${apiKey}`).then(res => {
    return res.json();
  });
};
const getFilmWeek = () => {
  return fetch(`${url}trending/all/week?api_key=${apiKey}`).then(res => {
    return res.json();
  });
};
const api = {
  getMovieList,
  movieDetails,
  getFilmByValue,
  getReviewsDetails,
  getFilmWeek,
};
export default api;
