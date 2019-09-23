 
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