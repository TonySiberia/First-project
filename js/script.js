let numberOfilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    cheksNumberOfFilms() {
        personalMovieDB.count = +prompt("сколько фильмов вы уже посмотрели", "");

        while (personalMovieDB.count == "" ||
               personalMovieDB.count == null ||
               isNaN(personalMovieDB.count)) {

               personalMovieDB.count = +prompt("сколько фильмов вы уже посмотрели", "");
               console.log("numberOfilms is incorrect value");
        }
    },
    rememberMyFilms() {

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
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB() {
        if (personalMovieDB.private == false) {
            console.log("private is false");
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        let a = 0;
        while (a < 4) {

            personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${ a + 1 }`, ``));
            while (personalMovieDB.genres[a] == "" || personalMovieDB.genres[a] == null) {
                console.log(typeof (personalMovieDB.genres[a]) + " " + personalMovieDB.genres[a]);
                console.log("a = " + a);
                personalMovieDB.genres[a] = prompt(`Ваш любимый жанр под номером ${ a + 1 }`, ``);
            }
            a++;
        }
        personalMovieDB.genres.forEach(element => console.log("Любимый жанр " + (Number(personalMovieDB.genres.indexOf(element)) + 1) + " - это " + element));
    },
    toggleVisibleMyDb() {
        if (personalMovieDB.private === false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};