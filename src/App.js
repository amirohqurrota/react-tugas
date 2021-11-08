import './App.css';
import Home from './page/home/Home';
import Error from './page/error/Error';
import About from './page/about/about';
import AboutApp from './page/aboutApp/AboutApp';
import AboutAuthor from './page/aboutAuthor/AboutAuthor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/about" index element={<About/>}/>
        <Route path="/about/about-app" index element={<AboutApp/>}/>
        <Route path="/about/about-author" index element={<AboutAuthor/>}/>
        <Route  path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
