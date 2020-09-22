import React, { Component } from 'react';
import '../css/index.css';
import apiKey from "../config";
import axios from 'axios';
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: [],
            loading: true
        };
    }


    componentDidMount() {
        this.performSearch("cats");
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1`)
            .then(response => {
                console.log(response);
                this.setState({
                    photos: response.data.photos.photo,
                    loading: false
                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        console.log(this.state.photos);
        return (
            <div className="container">
                hello world
            </div>
        );
    }

}
