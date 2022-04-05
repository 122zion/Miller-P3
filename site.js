/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: 'IDMB + Zions Top 8 Movies',
            owner: 'Zion',
            github: 'https://122zion.github.io/Miller-P3/'
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            addLike: function (movie){
              movie.likes ++;
              console.log("movie likes: " + movie.likes);

            },
            decreaseLike: function (movie){
              movie.dislikes --;
              console.log("movie dislikes:" + movie.dislikes);
            },

            posterClick: function(movie, index){
              var moviePostersLength = movie.posters.length;

              if(movie.posterindex < 0){
                movie.posterindex += moviePostersLength;
              }
              if (movie.posterindex < moviePostersLength - 1){
                movie.posterindex ++;
              }else {
                movie.posterindex = 0;
              }
              console.log("index:"+movie.posterindex + "movie posters:" + moviePostersLength);
            }

      }
})

vue_app.mount("#vue_app")
