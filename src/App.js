import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import FaqPage from './pages/FaqPage'
import RulesPage from './pages/RulesPage'
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import DetailsFilmPage from './pages/DetailsFilmPage'
//klucz APi
//5ca55bf15fc84068dd2fd8e2acf4df01

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/actorpage" element={<ActorPage />} />
          <Route path="/faqpage" element={<FaqPage />} />
          <Route path="/rulespage" element={<RulesPage />} />
          <Route path="/details/:movieid" element={<DetailsFilmPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
