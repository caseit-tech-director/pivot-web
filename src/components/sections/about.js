import React, { Component } from "react";
import "./about.scss";

class about extends Component {
  render() {
    return (
      <>
        <section className="centered-text section-break full-width">
          <h2>About Pivot</h2>
          <p>
            The{" "}
            <strong>
              local rendition of{" "}
              <a href="https://caseit.org" target="blank">
                CaseIT
              </a>
            </strong>
            , the world’s premier MIS business case competition.{" "}
            <strong>Since 2017, PIVOT has welcomed over 300 competitors</strong>{" "}
            representing British Columbia’s various universities to compete in
            this rigorous and engaging competition.
          </p>
        </section>
        <img src="img/Gallery.jpg" alt="" />
      </>
    );
  }
}

export default about;
