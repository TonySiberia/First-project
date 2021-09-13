
const numberOfilms = +prompt("сколько фильмов вы уже посмотрели", "");
console.log(numberOfilms);

const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    Genres: [],
    private: false
};

const lastFilm= prompt("один из последних просмотренных фильмов?", ""),
      lastFilmRait= prompt("на сколько вы его оцените?", ""),
      lastFilm1= prompt("один из последних просмотренных фильмов?", ""),
      lastFilmRait1= prompt("на сколько вы его оцените?", "");

personalMovieDB.movies[lastFilm] = lastFilmRait;
personalMovieDB.movies[lastFilm1] = lastFilmRait1;

console.log(personalMovieDB.movies);