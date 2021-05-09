import React from "react";
import "./style.css";
import moment from "moment"


// Uses results from state to display each employee in a row of the directory table
function SearchResults(props) {

    return (
        <tbody>
            {props.results.map(result => (
                <tr key={result.login.sha256}>
                    <td><img src={result.picture.thumbnail} alt={result.gender}/></td>
                    <td>{result.name.first} {result.name.last}</td>
                    <td>{result.phone}</td>
                    <td>mailto:{result.email}</td>
                    <td>{moment(result.dob.date).format("L")}</td>
                </tr>
            ))}
        </tbody>
    )
}

export default SearchResults;