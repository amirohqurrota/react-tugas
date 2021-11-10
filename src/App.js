import './App.css';
import Home from './page/home/Home';
import Error from './page/error/Error';
import About from './page/about/about';
import AboutApp from './page/aboutApp/AboutApp';
import AboutAuthor from './page/aboutAuthor/AboutAuthor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import {store, persistor} from './store/Store'

function App() {
  console.log("store :",store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/about" index element={<About/>}/>
            <Route path="/about/about-app" index element={<AboutApp/>}/>
            <Route path="/about/about-author" index element={<AboutAuthor/>}/>
            <Route  path="*" element={<Error/>}></Route>
          </Routes>
      </PersistGate>
    </Provider>
  );
}

// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Router basename={process.env.PUBLIC_URL}>
//           <Home />
//         </Router>
//       </PersistGate>
//     </Provider>
//   );
// }


export default App;
