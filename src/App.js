
import './App.css';
import { MockUsers } from './mockData';
import ProfilePage from './page/profile/ProfilePage'
import TodolistPage from './page/todolits/todolistPage';
import { DataTodo } from './dataTodolist';

// function App() {
//   return (
//     <div className="App">
//       <ProfilePage users={MockUsers}/>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <TodolistPage datas={DataTodo}/>
    </div>
  );
}

export default App;
