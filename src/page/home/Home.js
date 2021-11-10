

import ListTodo from '../../component/ListTodo';
import ListInput from '../../component/InputTodo';
import './home.css'
import Nav from '../../component/nav';


function Home (){
    return(
        // <h1>jjjj</h1>
        // <ListInput/>
        <div className='container'>
            <Nav/>
            <h1>todos</h1>
            <div className="inputArea">
                <ListInput/>
                <ListTodo/>
            </div>
        </div>
    )
}

export default Home