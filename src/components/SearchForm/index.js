import React from "react";
import "./style.css"

function SearchForm(props){


    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="employee"></label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="employee"
                    type="text"
                    className="form-control search-width"
                    placeholder="Type in an Employee Name"
                />
                
            </div>
        </form>
    )
}

export default SearchForm