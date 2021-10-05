const apiKey = "a00f284fcb846b1ad3ea9c0724975005"

// location = a ISO 3166-1 code to filter 

const Movies = {
    search(term, location) {
      return fetch(`https://api.themoviedb.org/3/search/movie?api_key=a00f284fcb846b1ad3ea9c0724975005&language=en-US&query=${term}&region=${location}`, {
       
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.results) {
          return jsonResponse.results.map(business => ({
            id: business.id,
            //imageSrc: "https://www.themoviedb.org/t/p/h30/{business.poster_path}"  , 
            imageSrc: business.poster_path,
            name: business.original_title,
            date: business.release_date,
            rating: business.vote_average,
            reviewCount: business.vote_count
          }));
        }
      });
    }
  };
  

  
  export default Movies;
  

