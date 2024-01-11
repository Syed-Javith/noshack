import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import TermsPrivacyCookiePolicy from './pages/TermsPrivacyCookiePolicy';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/terms-privacy-cookie-policy' element={<TermsPrivacyCookiePolicy />} />
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
