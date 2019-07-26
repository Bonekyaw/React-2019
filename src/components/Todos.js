import React, { Component } from 'react';

class Todos extends Component {
  render() {
	  return this.props.todos.map((todo) => (		//return ဆိုရင် {} မလို
	  	<h1>{todo.title}</h1>
	  ));
	}
}
export default Todos;
