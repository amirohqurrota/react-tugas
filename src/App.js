import logo from './logo.svg';
import './App.css';
import NameForm from './component/FormCoding';
import Search from './component/Search';
import { useInputValue } from './component/useInputValue';

function App() {
  return (
    <div>
      <Search/>
      <useInputValue/>
      <NameForm/>
    </div>
  );
}

export default App;
