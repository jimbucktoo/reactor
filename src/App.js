import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import SearchBar from './search_bar';
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyDOICvv4I17YxipbvrSeDs7HsmoloJVjVI';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
            //this.setState({videos});
        });
    };

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

        return (
            <div className="App">
                <br />
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    };
};

export default App;
