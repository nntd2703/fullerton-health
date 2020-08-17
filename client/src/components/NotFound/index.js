import React, { Component } from "react";
import "./styles.scss";

export default class NotFound extends Component {
  render() {
    return (
      <main className="bsod container not-found">
        <h1 className="neg title">
          <span className="bg">Error - 404</span>
        </h1>
        <p>An error has occured, to continue:</p>
        <p>
          * Return to our homepage.
          <br />* Send us an e-mail about this error and try later.
        </p>
        <nav className="nav">
          {/* <a className="link">index</a>
          &nbsp;|&nbsp;
          <a className="link">webmaster</a> */}
        </nav>
      </main>
    );
  }
}
