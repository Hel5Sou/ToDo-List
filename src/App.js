import React from 'react';
import Header from './Components/Header';
import './App.css';



function Todo({ todo, index, completeTodo, removeTodo, isInProgress }) {
  const todoClass = () => (todo.isInProgress) ? "todo in-progress" : "todo in-todo"; 

  return (
    <div
      className={todoClass()}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => isInProgress(index)}>In progress</button>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
};

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Build todo app for fun",
      isCompleted: false,

    },
    {
      text: "Meet with friends for coffee",
      isCompleted: false
    },
    {
      text: "Go for walk with kids",
      isCompleted: false
    }
  ]);
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };

    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }; 
    
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };

    const isInProgress = index => {
      const newTodos = [...todos];
      newTodos[index].isInProgress = true;
      setTodos(newTodos);
    }; 

 
 
    return (
      <div>
        <Header />
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              isInProgress={isInProgress}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
    );
  }

export default App;
