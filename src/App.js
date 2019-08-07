// import React from 'react';
import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
  state = {
    todos: [
          {
            id: 1,
            title: 'Having breakfast',
            completed: false
          },
          {
            id: 2,
            title: 'Coding smart',
            completed: false
          },
          {
            id: 3,
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

  render() {
// function App() {
    // console.log(this.state.todos)
    return (
      <div className="App">
          <Header />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}
export default App;
