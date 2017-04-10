"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navvar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" height="20px" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="app">Home</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        <li>
                            <Link to="authors">Authors</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;