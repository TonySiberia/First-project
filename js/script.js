let numberOfilms;

const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function cheksNumberOfFilms() {
    numberOfilms = +prompt("сколько фильмов вы уже посмотрели", "");

    while (numberOfilms == "" || numberOfilms == null || isNaN(numberOfilms)) {
        numberOfilms = +prompt("сколько фильмов вы уже посмотрели", "");
        console.log("numberOfilms is incorrect value");
    }
}

function rememberMyFilms() {
    let a = 0;

    while (a < 2) {

        const lastFilm = prompt
              ("1 один из последних просмотренных фильмов?", ""),
              lastFilmRait = prompt
              ("на сколько вы его оцените?", "");

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
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log("private is false");
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    let a = 1; 
    while (a < 4) {
        personalMovieDB.genres.push(prompt
        (`Ваш любимый жанр под номером ${ a }`, ``));
        a++;
    }
}

console.log(personalMovieDB);