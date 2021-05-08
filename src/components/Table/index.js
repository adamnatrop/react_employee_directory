import React from "react";
import "./style.css";
import SearchResults from "../SearchResults"

function Table(props) {
    return (
        <div className="container">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col" className="sortByName" onClick={() => props.sortBy()} >Name <i className="fas fa-arrow-left"></i></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
                
                   <SearchResults 
                        results={props.searchResults}
                   />
                    
                
            </table>
        </div>
    
    )
}

export default Table;