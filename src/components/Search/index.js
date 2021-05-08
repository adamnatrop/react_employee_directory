import React, { Component } from "react";
import SearchForm from "../SearchForm";
import API from "../../utils/API";
import Table from "../Table";


class Search extends Component {
    state = {
        search: "",
        results: [],
        sortResults: [],
        error: ""
    };

    // when component loads sets state for results returned by API
    componentDidMount(){
        API.getEmployeeData()
            .then(res => {
                
                this.setState({results: res.data.results})
                this.sortResultsName(this.state.search)
            })
            .catch(err => console.log(err));
            
    }


    handleInputChange = async event => {
        await this.setState({ search: event.target.value });
        await this.sortResultsName(this.state.search)
            
      };

      // filters results based on letters typed into search bar
    sortResultsName(search) {
        if(!this.state.search.length) {
            this.setState({sortResults: this.state.results})
        } else {
            const sorted = this.state.results.filter(results => results.name.first.toLowerCase().includes(search) || results.name.last.toLowerCase().includes(search))
            this.setState({sortResults: sorted})
            
        }
    }
    
    sortBy = () => {
        
    
        const sorted = this.state.results.sort(function(a, b){
            var x = a.name.last.toLowerCase();
            var y = b.name.last.toLowerCase();
            if(x < y) { return -1; };
            if(x > y) { return 1; };
            return 0;
        })
        this.setState({sortResults: sorted});
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                    />
                    <Table
                        searchResults={this.state.sortResults}
                        sortBy={this.sortBy}    
                    />
                </div>
            </div>
        )
    }

}

export default Search;