import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component{

    state = {
        movies : [
            {
                "id":1,
                "name":"Merdo",
                "rating":8.3,
                "overview":"Falanfalan merdomal",
                "imageUrl":"https://"
            },
            {
                "id":1,
                "name":"Merdo",
                "rating":8.3,
                "overview":"Falanfalan merdomal",
                "imageUrl":"https://"
            },
            {
                "id":1,
                "name":"Merdo",
                "rating":8.3,
                "overview":"Falanfalan merdomal",
                "imageUrl":"https://"
            },
        ]
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar/>
                    </div>
                </div>

                <MovieList/>

            </div>
        );
    }
    
}

export default App;