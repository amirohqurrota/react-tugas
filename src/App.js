
import './App.css';
import TodolistPage from './page/todolits/todolistPage';
import { DataTodo } from './dataTodolist';

function App() {
  return (
    <div>
      <TodolistPage datas={DataTodo}/>
    </div>
  );
}

export default App;
