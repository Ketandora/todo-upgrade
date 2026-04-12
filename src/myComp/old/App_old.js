import React, { useEffect, useState } from "react";
import Header from "./Header_old";
import Todos from "./Todos_old";
import AddTodoOld from "./AddTodo_old.js"
import About from "./About.js"
import Footer from "./Footer_old";
import{
  BrowserRouter as Router,
  //Switch,
  Routes,
  Route
} from "react-router-dom";

function App() { 
 
  let initTodo;
  const storedTodos= localStorage.getItem("todos");
  if(storedTodos === null){
    initTodo =[];
  }
  else{
    try{
      initTodo= JSON.parse(storedTodos);

      if(!Array.isArray(initTodo)){
        initTodo=[];
      }
    }
    catch(error){
      initTodo=[];
    }
  }
  // if (localStorage.getItem("todos") === null) {
  //   initTodo = [];
  // }
  // else
  //   initTodo = JSON.parse(localStorage.getItem("todos"));

 const [todos, setTodos] = useState(initTodo);
  const onDelete = (todo) => {
    console.log("I am ondelete of todo ", todo);
    //deleting this way wont work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    //localStorage.setItem("todos", JSON.stringify(todos));
  };


  const addTodo = (title, desc) => {
    console.log("I am adding this todo ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else
      sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
    ////use effect

  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

 
  return (
    <>
    <Router>
      <Header title="TODO APP" show={true}/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
              
            <Routes>           
              <Route exact path="/" element={
                <>
                <AddTodoOld addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />  
                </>
              }>
              </Route>
              <Route path="/about" element={<About/>}/>
            </Routes>
            {/* <AddTodo_old addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> */}

          </div>
        </div>
      </div>
      <Footer />
     </Router> 
    </>
  );
}

export default App;