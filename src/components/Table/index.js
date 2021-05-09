import React from "react";
import "./style.css";
import SearchResults from "../SearchResults"


// Creates Table to display Employees
function Table(props) {
    return (
        <div className="container table-responsive">
            <table className="table table-striped table-hover ">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    {/* creates link on name field to sort alphabetically */}
                    <th scope="col" className="sortByName" onClick={() => props.sortBy()} >Name <i className="fas fa-arrows-alt-v"></i></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
                    {/* Use SearchResults component to map over array to display all employees returned from API */}
                   <SearchResults 
                        results={props.searchResults}
                   />
                    
                
            </table>
        </div>
    
    )
}

export default Table;