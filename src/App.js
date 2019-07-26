// import React from 'react';
import React, { Component } from 'react';
import Todos from './components/Todos';
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
  render() {
// function App() {
    // console.log(this.state.todos)
    return (
      <div className="App">
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}
export default App;
