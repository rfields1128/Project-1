 
  // Randall Code below:
  
  //here i'm adding the new variable to store the map data
  var mymap = L.map('mapid').setView([30.447965, -97.663395], 13);
  // this is adding a tilelayer to the map using an api key(access token

  var osm=new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mymap);

  L.Control.geocoder().addTo(mymap);
 // this adds a marker to the map
 var marker = L.marker([30.447965, -97.663395]).addTo(mymap);

// showtimes, theater location api
 var apikey = "KjOQzlwvuexNF2nJ5EEMEBuwk3er0xXH"
 var url = ("https://api.internationalshowtimes.com/v4/cinemas/?apikey=" + apikey)

 $.ajax ({
   url: url,
   method: "GET"
 }).then(function(response) {
   console.log("TEST");
   console.log(response)
 });

 var movieName = "avengers"
 var queryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=744dd719b5b32b3a98b140c3ec414890&language=en-US";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });





// James Stuff Below
// Declare the variables
var movieName = "";
var genre = "";
var distance = "0";
var coordinates = "0";
// Create listener to store value from the genre navbar menu
$("#dropdown-item").on("click", function (event) {
  event.preventDefault();
  genre = $("#dropdown-item").val();
  console.log(genre);
});
// Create listener to store value from the distance navbar menu
$("#dropdown-item").on("click", function (event) {
  event.preventDefault();
  genre = $("#dropdown-item").val();
  console.log(genre);
});
// Create listener to run a function that gets the address of the nearest theater playing a given movie
$("#dropdown-item").on("click", function (event) {
  event.preventDefault();
  distance = $("#dropdown-item").val();
  console.log(distance);
});
// Create and populate an object to store genre names and genre codes
var genresMap {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  scienceFiction: 878,
  tvMovie: 10770,
  thriller: 53,
  war: 10752,
  western: 37,
}
// Write an AJAX request to OMDB to get plot and poster URL
var OMDBqueryURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
$.ajax({
  url: OMDBqueryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  // Change the HTML to reflect the data
  $("#card-img-top").text(response.poster);
  $("#card-title").text(response.title);
  $("#card-text").text(response.plot);
});
// Write an AJAX request to TMDB to get list of recently released movies in a given genre
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/discover/movie?with_genres=35&year=2019&primary_release_year=2019&include_video=false&include_adult=false&certification_country=usa&sort_by=popularity.desc&language=en-US&api_key=744dd719b5b32b3a98b140c3ec414890",
  "method": "GET",
  "headers": {},
  "data": "{}"
}
// Write an AJAX request to leaflet to get a map of the nearest theater playing a given movie
// Write Jquery to insert the results of OMDB and TMDB into the HTML Divs
$("#card-img-top").text(response.poster);
$("#card-title").text(response.title);
$("#card-text").text(response.plot);


// Lacy Stuff Below
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
       <script type="text/javascript">
           // Here is our psuedo code:
           // Declare the variables
           // Create listener to store value from the genre navbar menu
           // Create listener to store value from the distance navbar menu
           // Create listener to run a function that gets the address of the nearest theater playing a given movie
           // Create and populate an object to store genre names and genre codes
           // Write an AJAX request to OMDB to get plot and poster URL
​
    function getMovies(searchText){
  axios.get('http://www.omdbapi.com?s='+searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });
​
      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
function getMovie(){
  let movieId = sessionStorage.getItem('movieId');
​
  axios.get('http://www.omdbapi.com?i='+movieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;
​
      let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;
​
      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
           // Write an AJAX request to TMDB to get list of recently released movies in a given genre
           // Write an AJAX request to leaflet to get a map of the nearest theater playing a given movie
           // Create a modal to pop up and show the results of the leaflet request - the map
           // Write Jquery to insert the results of OMDB and TMDB into the HTML Divs
           //Here are some code pieces that don't yet work but are a rough draft:
           // Declare variables
           var movieName = "";
           var genre = "";
           var distance = "0";
           var zip = "0";
           // Capture Button Clicks from Genre Menu and store the value as variable "genre"
           $("#add-user").on("click", function (event) {
               event.preventDefault();
               genre = $("dropdown-item").val();
               console.log(genre);
           });
           // Capture Button Clicks from Distance Menu and store the value as variable "distance"
           $("#add-user").on("click", function (event) {
               event.preventDefault();
               genre = $("dropdown-item").val();
               console.log(distance);
           });
           // Create AJAX request to OMDB for poster image and synopsis
           var OMDBqueryURL = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
           $.ajax({
               url: OMDBqueryURL,
               method: "GET"
           }).then(function (response) {
               console.log(response);
               // Change the HTML to reflect the data
               $("#card-img-top").text(response.poster);
               $("#card-title").text(response.title);
               $("#card-text").text(response.plot);
           });
           // Change the HTML to reflect the data
           $("#card-img-top").text(response.poster);
           $("#card-title").text(response.title);
           $("#card-text").text(response.plot);
           //This is the JQuery code for TMDB
           var settings = {
               "async": true,
               "crossDomain": true,
               "url": "https://api.themoviedb.org/3/discover/movie?without_genres=27&with_genres=35&year=2019&primary_release_year=2019&include_video=false&include_adult=false&certification_country=usa&sort_by=popularity.desc&language=en-US&api_key=744dd719b5b32b3a98b140c3ec414890",
               "method": "GET",
               "headers": {},
               "data": "{}"
           }
           </script>


