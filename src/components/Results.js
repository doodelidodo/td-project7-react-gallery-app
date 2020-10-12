import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ImageList from "./ImageList";

//Components

const Results = () => (
    <div className="photo-container">
        <h2>Results</h2>
        <Route exact path="/" render={() => <Redirect to="/dogs" />} />
        <Route path="/dogs" render={() => <ImageList />} />
        <Route path="/cats" render={() => <ImageList/>} />
        <Route path="/birds" render={() => <ImageList />} />
    </div>
);

export default Results;