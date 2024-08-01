import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import About from './containers/About';
import News from './containers/News';
import Portfolio from './containers/Portfolio';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
