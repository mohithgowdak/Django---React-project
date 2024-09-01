import React, { Component } from "react"; // Correct import statement
import { render } from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Testing React Code</h1>;
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
