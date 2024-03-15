import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import NavBar from './NavBar';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Commedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horor Movies" fetchUrl={requests.fetchHororMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Classic" fetchUrl={requests.fetchMyFav} />
      <Row title="Entertainment" fetchUrl={requests.fetchMyCom} />
      <Row title="Cartoon" fetchUrl={requests.fetchMyCartoon} />
      <Footer />
    </div>
  );
}

export default App;
