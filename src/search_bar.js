import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
			<input onChange={event => this.setState({ term: event.target.value})}/>
			Value of Input: {this.state.term}
			</div>
		)
	}
}

// const SearchBar = () => {
// 	return <input />;
// };

export default SearchBar;


