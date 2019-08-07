import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
	  return this.props.todos.map((todo) => (		
	  	<TodoItem key={todo.id} todo={todo} markComplete={ this.props.markComplete }/>
	  ));
	}
}

//TypeChecking props Validator only in development mode
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;

// PropTypes exports a range of validators that can be used 
// to make sure the data you receive is valid. In this example, 
// we’re using PropTypes.string. When an invalid value is provided for a prop, 
// a warning will be shown in the JavaScript console. For performance reasons, 
// propTypes is only checked in development mode.