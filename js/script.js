const numberOfilms = +prompt("сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    Genres: [],
    private: false
};


let a = 0;

while (a < 2) {

    const lastFilm = prompt("1 один из последних просмотренных фильмов?", ""),
          lastFilmRait = prompt("на сколько вы его оцените?", "");

    if (lastFilm != null &&
        lastFilmRait != null &&
        lastFilm.length > 0 &&
        lastFilm.length <= 50 &&
        lastFilmRait.length > 0 &&
        lastFilmRait.length <= 50) {

        personalMovieDB.movies[lastFilm] = lastFilmRait;
        a++;
    }
}


if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}