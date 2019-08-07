import React, {Component} from 'react'				//rce + Tab
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	render() {
		const {id , title} = this.props.todo;
		return (
			// <div style={{ backgroundColor : '#f4f4f4' }}>
			// <div style={ itemStyle }>
			 <div style={ this.getStyle() }>
				<p>
					<input type="checkbox" onChange={ this.props.markComplete.bind(this,id)} /> {' '}
					{ title}
					<button style={ btnStyle } onClick={this.props.delTodo.bind(this, id)}>&times;</button>
				</p>
			</div>
		)
	}
}

//TypeChecking props Validator only in development mode
TodoItem.propTypes = {
	todos: PropTypes.object.isRequired
}

//Style object
	const btnStyle = {
		background: '#ff0000',
		color: '#fff',
		border: 'none',
		padding: '5px 8px',
		borderRadius: '50%',
		cursor: 'pointer',
		float: 'right'
	}
// const itemStyle = {
// 	backgroundColor : '#f4f4f4'
// }
export default TodoItem

// Why is my function being called every time the component renders?

// Make sure you aren’t calling the function when you pass it to the component:

// render() {
//   // Wrong: handleClick is called instead of passed as a reference!
//   return <button onClick={this.handleClick()}>Click Me</button>
// }

// Instead, pass the function itself (without parens):

// render() {
//   // Correct: handleClick is passed as a reference!
//   return <button onClick={this.handleClick}>Click Me</button>
// }

// How do I pass a parameter to an event handler or callback?

// You can use an arrow function to wrap around an event handler and pass parameters:

// <button onClick={() => this.handleClick(id)} />

// This is equivalent to calling .bind:

// <button onClick={this.handleClick.bind(this, id)} />