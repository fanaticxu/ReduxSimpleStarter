import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDSIJv5O8LhPPM1to5wQo6o6uoVVp5qFDY';

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

// Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
