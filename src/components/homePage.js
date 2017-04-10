"use strict";

var React = require("react");
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Fluc for ultra responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
});

module.exports = Home;