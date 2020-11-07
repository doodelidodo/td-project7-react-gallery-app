import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ImageList from "./ImageList";
import { Consumer } from "./Context";
import NotFound from "./NotFound";

const Results = () => {
    return(
        <Consumer>
            {context => {
                return(
                    <div className="photo-container">
                        <h2>Results</h2>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/dogs" />} />
                            <Route path="/dogs" render={() => <ImageList data={context.dogs}/>} />
                            <Route path="/cats" render={() => <ImageList data={context.cats}/>} />
                            <Route path="/birds" render={() => <ImageList data={context.birds}/>} />
                            <Route path="/search" render={() => <ImageList data={context.search}/>} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                );
            }}
        </Consumer>
    );
};

export default Results;