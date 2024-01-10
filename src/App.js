import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about-us' element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
