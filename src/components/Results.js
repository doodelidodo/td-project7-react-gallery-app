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
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/dogs" />} />
                            <Route path="/dogs" render={() => <ImageList data={context.dogs} loading={context.loading} title="Dogs"/>} />
                            <Route path="/cats" render={() => <ImageList data={context.cats} loading={context.loading} title="Cats"/>} />
                            <Route path="/birds" render={() => <ImageList data={context.birds} loading={context.loading} title="Birds"/>} />
                            <Route path="/search" render={() => <ImageList data={context.search} loading={context.loading} title="Search"/>} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                );
            }}
        </Consumer>
    );
};

export default Results;