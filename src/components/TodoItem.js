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
// const itemStyle = {
// 	backgroundColor : '#f4f4f4'
// }
export default TodoItem