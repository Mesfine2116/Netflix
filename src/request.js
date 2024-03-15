const API_KEY="c3e984daf0afd7f54a414525d673f094"

const requests={
    fetchMyFav:`/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchMyCom:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchMyCartoon:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHororMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests; 