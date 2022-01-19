function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'eat breakfast',
      isCompleted: false,
    },
    {
      text: 'walk Ray',
      isCompleted: false,
    },
    {
      text: 'go to the gym',
      isCompleted: false,
    },
    {
      text: 'code',
      isCompleted: false,
    },
    {
      text: 'call my mom',
      isCompleted: false,
    },
    {
      text: 'dont procrastinate on your work',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
