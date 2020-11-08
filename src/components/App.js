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
import SearchForm from "./SearchForm";

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            images: [],
            cats: [],
            dogs: [],
            birds: [],
            search: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch("dogs");
        this.performSearch("cats");
        this.performSearch("birds");
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`)
            .then(response => {
                if(query === "cats") {
                    this.setState({
                        cats: response.data.photos.photo.map(photo => {
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
                } else if(query === "birds") {
                    this.setState({
                        birds: response.data.photos.photo.map(photo => {
                            return  `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                        }),
                        loading: false
                    })
                } else {
                    this.setState({
                        search: response.data.photos.photo.map(photo => {
                            return  `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                        }),
                        loading: false
                    })
                }
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    };

    handleUserSearch = (searchValue) => {
        this.setState({
            search: [],
            loading: true
        });
        this.performSearch(searchValue);
    };

    render() {
        return (
            <Provider value={{
                cats: this.state.cats,
                dogs: this.state.dogs,
                birds: this.state.birds,
                search: this.state.search,
                loading: this.state.loading,
                actions: {
                    userSearch: this.handleUserSearch
                }
            }}>
                <BrowserRouter>
                    <div className="container">
                        <SearchForm />
                        <Navigation/>
                        {
                            (this.state.loading)
                                ? <p>Loading...</p>
                                :  <Results />
                        }

                    </div>
                </BrowserRouter>
        </Provider>
        );
    }
}
