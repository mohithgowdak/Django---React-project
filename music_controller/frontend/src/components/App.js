import React, { Component } from "react"; // Correct import statement
import { render } from "react-dom";
import HomePage from "./HomePage";
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
        <HomePage />
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);
