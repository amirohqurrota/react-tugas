//import logo from './logo.svg';
import './App.css';
import './css/index.css';
//import './js/review_message.js';
import './css/review_message.css';
import './css/contact-us.css';
// import './js/contact_us.js';
import Navbar from './Navbar.js';
import Content_profil from './Content-profil.js';
import Content_contact from './Content-contact.js';

export function App_ContactUs() {
  return (
    <div className="App">
        <Navbar/>
        <Content_contact/>
    </div>

  );
}

export default App_ContactUs;
