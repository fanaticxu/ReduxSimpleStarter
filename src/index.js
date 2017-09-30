import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDSIJv5O8LhPPM1to5wQo6o6uoVVp5qFDY';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term: '爸爸去哪儿'}, (videos) => {
            this.setState({ videos });
            // this.setState({ videos: videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
            );
    }
}


// Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
