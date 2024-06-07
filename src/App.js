import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './PortfolioContainer/Navbar';
import MainPage from './PortfolioContainer/Main/MainPage';

function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='*' element={<div>404 NOT FOUND</div>}/>
        </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
