import React from 'react'
import './App.css';
import Home from './components/pages/Home';
import Header from './components/Header';
import About from './components/pages/About';
import NotFoundPage from './components/pages/NotFoundPage';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route exact path= "/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App