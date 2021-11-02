//import logo from './logo.svg';
import './App.css';
import './css/index.css';
import './css/review_message.css';
import Navbar from './Navbar.js';
import Content_profil from './Content-profil.js';
import Content_contact from './Content-contact.js';
import Content_ReviewMessage from './Content-ReviewMessage.js';

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Content_profil/>
//     </div>

//   );
// }


function App() {
  return (
    <div className="App">
      <Content_contact/>
    </div>

  );
}

export default App;
