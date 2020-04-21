import React from "react";
import SearchBar from "./SearchBar";
import omdb from "../apis/omdb";

class app extends React.Component  {
    onTermSubmit = async term => {
        const response = await omdb.get('/',{
          params: {
            apikey: '8561a479',
            t: term
          }
        });
    }
    render() {
        return (
            <div><SearchBar onFormSubmit={this.onTermSubmit}/></div>
        );
    }
}

export default app;