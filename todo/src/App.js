//  import React, { useState } from "react";
// import "./App.css";
import "./components/LoginForm.css"; 
// import Covid from "./components/Covid";
import LoginForm from "./components/LoginForm";
// import darklight from "./components/darklight";
// import Form from "./components/Form";
// import TodoList from "./components/todolist";

const App = () => {
  // const [data, setData] =useState([]);
  // const [darkMode, setDarkMode] = useState(false);
  // const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  // const [editId, setEditId] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (editId) {
  //     const editTodo = todos.find((i) => i.id === editId);
  //     const updatedTodos = todos.map((t) =>
  //       t.id === editTodo.id
  //         ? (t = { id: t.id, todo })
  //         : { id: t.id, todo: t.todo }
  //     );
  //     setTodos(updatedTodos);
  //     setEditId(0);
  //     setTodo("");
  //     return;
  //   }

  //   if (todo !== "") {
  //     setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
  //     setTodo("");
  //   }
  // };

  // const handleDelete = (id) => {
  //   const delTodo = todos.filter((to) => to.id !== id);
  //   setTodos([...delTodo]);
  // };

  // const handleEdit = (id) => {
  //   const editTodo = todos.find((i) => i.id === id);
  //   setTodo(editTodo.todo);
  //   setEditId(id);
  // };
 
  return (
    <div className="App">
      {/* <darklight /> */}
        {/* <Covid />; */}
        <LoginForm />
      {/* </div> */}
      {/* <>helllo</<Covid />;h1> */}
    </div>
    // <div className="App">
    //   <div className="container">
    //     <h1>Todo List App</h1>
    //     <Form
    //       handleSubmit={handleSubmit}
    //       todo={todo}
    //       editId={editId}
    //       setTodo={setTodo}
    //     />

    //     <TodoList
    //       todos={todos}
    //       handleEdit={handleEdit}
    //       handleDelete={handleDelete}
    //     />
    //   </div>
    // </div>
  );
};

export default App;