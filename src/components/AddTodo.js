import React, {Component} from 'react'

export class AddTodo extends Component {
	state = {
		title: ''
	}
	onChange = (e) => this.setState({ title: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.state.title = ''
	}
	render() {
		return (
			<form style={{display: 'flex'}} onSubmit={this.onSubmit}>
				<input type="text" name="title" placeholder="Add todo ..."
				style={{ flex: '10', padding: '5px'}}
				onChange={this.onChange}
				value={ this.state.title }/>
				<input type="submit" value="Add" className="btn"
				style={{ flex: '1'}}/>
			</form>
		)
	}
}

export default AddTodo