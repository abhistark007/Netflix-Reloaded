const API_KEY="11de83d8bc932ed81972d968cb6d7e9e";

const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

// https://api.themoviedb.org/3/trending/all/week?api_key=11de83d8bc932ed81972d968cb6d7e9e&language=en-US
// https://api.themoviedb.org/3/discover/tv?api_key=11de83d8bc932ed81972d968cb6d7e9e&with_networks=213/vpfJ
// K9F0UJNcAIIeC42oJyKMnZQ.jpg
export default requests;

