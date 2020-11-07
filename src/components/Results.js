import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ImageList from "./ImageList";
import { Consumer } from "./Context";


//Components

const Results = () => {
    return(
        <Consumer>
            {context => {
                return(
                    <div className="photo-container">
                        <h2>Results</h2>
                        <Route exact path="/" render={() => <Redirect to="/dogs" />} />
                        <Route path="/dogs" render={() => <ImageList data={context.dogs}/>} />
                        <Route path="/cats" render={() => <ImageList data={context.cats}/>} />
                        <Route path="/birds" render={() => <ImageList data={context.birds}/>} />
                        <Route path="/search" render={() => <ImageList data={context.search}/>} />
                    </div>
                );
            }}
        </Consumer>
    );
};

export default Results;