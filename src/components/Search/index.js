import React, { Component } from "react";
import SearchForm from "../SearchForm";
import API from "../../utils/API";



class Search extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    };


    componentDidMount(){
        API.getEmployeeData()
            .then(res => {
                console.log(res.data.results)
                this.setState({results: res.data.results})
                
            })
            .catch(err => console.log(err));
            
    }


    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                    />
                </div>
               
                
            </div>
        )
    }

}

export default Search;