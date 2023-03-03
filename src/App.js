import './App.css'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home.js'
import FavouritesPage from './pages/Favourites.js'
import NavigationBar from './components/NavigationBar'
function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
