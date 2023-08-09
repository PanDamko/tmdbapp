import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import FaqPage from './pages/FaqPage'
import DetalisSeriesPage from './pages/DetalisSeriesPage'
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import DetailsFilmPage from './pages/DetailsFilmPage'
import FullCredtisPage from './pages/FullCredtisPage'
import SeriesPage from './pages/SeriesPage'
import SeasonPage from './pages/SeasonPage'
import DetailsActorPage from './pages/DetailsActorPage'
//klucz APi
//5ca55bf15fc84068dd2fd8e2acf4df01

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/actorpage" element={<ActorPage />} />
          <Route path="/faqpage" element={<FaqPage />} />
          <Route path="/detailsseries/:movieid" element={<DetalisSeriesPage />} />
          <Route path="/details/:movieid" element={<DetailsFilmPage />} />
          <Route path="/credits/:movieid" element={<FullCredtisPage />} />
          <Route path="/season/:movieid/:season/" element={<SeasonPage />} />
          <Route path="/DetailsActorPage/:actorid" element={<DetailsActorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
