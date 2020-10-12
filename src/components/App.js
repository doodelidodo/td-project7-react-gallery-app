import React, { Component } from 'react';
import {Provider} from "./Context";
import {
    BrowserRouter
} from "react-router-dom";
import '../css/index.css';
import apiKey from "../config";
import axios from 'axios';

//Components
import Navigation from './Navigation';
import Results from "./Results";

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            images: [],
            cats: [],
            dogs: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch("dogs");
        this.performSearch("cats");
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`)
            .then(response => {
                console.log(response);
                if(query === "cats") {
                    this.setState({
                        cats: response.data.photos.photo.map(photo => {
                            console.log(query);
                            return  `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                        }),
                        loading: false
                    })
                } else if(query === "dogs") {
                    this.setState({
                        dogs: response.data.photos.photo.map(photo => {
                            return  `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                        }),
                        loading: false
                    })
                } else {
                    this.setState({
                        search: response.data.photos.photo,
                        loading: false
                    })
                }
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    };

    render() {
        return (
            <Provider value={{
                cats: this.state.cats,
                dogs: this.state.dogs
            }}>
                <BrowserRouter>
                    <div className="container">
                        <Navigation/>
                        <Results />
                    </div>
                </BrowserRouter>
        </Provider>
        );
    }
}
