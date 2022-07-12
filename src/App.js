
import './App.css';
import TodoInput from './Todos/Input/TodoInput'
import TodoList from './Todos/List/TodoList';

import UseTimer from './Time/useTimer';
function App() {
  return (
    <div className="App">
    
    <TodoList />
  
    <h1 className='vl'></h1>
    <TodoInput />
  
    </div>
  );
}

export default App;
