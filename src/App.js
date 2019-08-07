// import React from 'react';
import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 } from 'uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [
          {
            id: v4(),
            title: 'Having breakfast',
            completed: false
          },
          {
            id: v4(),
            title: 'Coding smart',
            completed: false
          },
          {
            id: v4(),
            title: 'Meeting with Client',
            completed: false
          }
    ]
  };


  //Toggle Completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {  //Setter
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [ ...this.state.todos.filter( todo => todo.id !== id)]});
  }
  //Add Todo
  //npm i uuid
  addTodo = (title) => { 
  const newTodo = {
    id: v4(),
    title,
    completed: false
  }     
    this.setState({ todos: [ ...this.state.todos, newTodo]})
  }


  render() {
// function App() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <div  className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />

        </div>
      </div>
    );
  }
}
export default App;
