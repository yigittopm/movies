import React from 'react';

class MovieList extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://i.pinimg.com/originals/ec/26/eb/ec26eba34ef3a2fdfedf1c39e620f8fa.jpg" 
                        className="card-img-top" alt="Picture"/>
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">Hızlı ve Öfkeli</p>

                            <div className="d-flex justify-content-between align-item-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge badge-info">8.7</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieList;