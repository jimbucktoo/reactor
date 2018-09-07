import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Enter Search Term' };
    }

    render() {
        return (
            <div>
                <input 
                    class="search-bar"
                    //value = {this.state.term} 
            onChange={event => this.onInputChange(event.target.value)}/>
        <br /><br />
    </div>
        );
    };

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    };
};

// const SearchBar = () => {
// 	return <input />;
// };

export default SearchBar;


