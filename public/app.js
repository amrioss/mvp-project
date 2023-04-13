const movieListEl = document.querySelector(".movieList");
const detailsEl = document.querySelector(".details");
const topContainerEl = document.querySelector(".topContainer");
const ratingEl = document.querySelector(".rating");
const imageEl = document.querySelector(".imageContainer");
const releaseDateEl = document.querySelector(".releaseDate");
const titleEl = document.querySelector(".title");
const summaryEl = document.querySelector(".summary");

fetch("/api/marvel")
  .then((result) => result.json())
  .then((movies) => {
    movies.forEach((movie) => {
      let movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerText = movie.title;
      movieListEl.append(movieEl);
      movieEl.addEventListener("click", () => {
        console.log(movie);
        displayMovieData(movie);
      });
      // movieListEl.innerHTML += makeMovie(movie);
    });
  });

function displayMovieData(movie) {
    console.log(movie.photopath);
  ratingEl.innerText = 'IMDB Rating: ' + movie.rating;
  imageEl.innerHTML =`<img class='image' src='${movie.photopath}'/>`;
  releaseDateEl.innerText = 'Realease Date: ' + movie.release;
  titleEl.innerText = movie.title;
  summaryEl.innerText = movie.summary;
}
// function makeMovie(movie){
//     return `<div class="movie">${movie.title}</div>`
// }
