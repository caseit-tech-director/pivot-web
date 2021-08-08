import React, { Component } from "react";

import "./why.scss";
import AlumniDisplay from "../AlumniDisplay";

class why extends Component {
  render() {
    return (
      <section className="whyPivot">
        <h2 className="centered-text">Why Pivot 2022</h2>
        {/* Reason 1 */}
        <div className="pivot-reason main-grid full-width">
          <h3 className="main-grid__primary-col">Take on challenges</h3>
          <p className="main-grid__primary-col">
            Test your abilities to further your problem-solving skills and
            compete against a pool of qualified teams.
          </p>
          <div className="main-grid__row-break"></div>
          <h3 className="main-grid__secondary-col">Work collaboratively</h3>
          <p className="main-grid__secondary-col">
            <strong>Solve a real-life business problem</strong> {" "}
            with your team and further your understanding of the
            rapidly-growing BTM industry
          </p>
          <div className="main-grid__row-break"></div>
          <h3 className="main-grid__primary-col">Fine-tune Your Skills</h3>
          <p className="main-grid__primary-col">
            With our {""}<strong>sponsored workshops</strong>, competitors will have the opportunity to learn
            from industry professionals and refine their case competition skills.
          </p>
          <img
            src="img/competition-challenge.jpg"
            alt="4 student presenting in a case competition"
            className="main-grid__image"
          />
          <div className="main-grid__middle-col">
            <p className="quote">
              “I came back to Pivot in 2020 mainly because I also competed in
              2019, and it was an amazing experience. I also was hoping to test
              out the BTM knowledge I had gained in my MIS concentration in the
              last term.”
            </p>
            <div className="label">
              <a
                target="blank"
                href="https://www.linkedin.com/in/thelokeshgupta/?originalSubdomain=ca"
              >
                Lokesh Gupta
              </a>{" "}
              - 2019 Pivot Competitor
            </div>
          </div>
        </div>
        {/* Reason 2 */}
        <div className="pivot-reason main-grid full-width">
          <h3 className="main-grid__primary-col">Expand your network</h3>
          <p className="main-grid__primary-col">
            Network with recruiters from top consulting firms, rapidly-growing
            startups, data-analytics companies and more.
          </p>
          <img
            src="img/network-opportunity.svg"
            alt="networking opportunities"
            className="main-grid__full-col main-grid__image--full"
          />
        </div>
        {/* Reason 3 */}
        <div className="pivot-reason main-grid full-width">
          <h3 className="main-grid__primary-col">Gain Insight</h3>
          <p className="main-grid__primary-col">
            Ask questions and learn from successful business professionals who
            have been in your shoes.
          </p>

          <AlumniDisplay className="main-grid__full-col" />
          <p className="main-grid__secondary-col">
            In our interactive <strong>Firside Chat</strong>, a panel of SFU
            alumni from the MIS industry share their experiences and provide
            tips for aspiring business professionals.
          </p>
        </div>

        {/* Reason 4 */}
        <div className="pivot-reason full-width">
          <h3>Recruitment Opportunities</h3>
          <p>
            Opportunity to include your resume in the Pivot Competitor Resume
            Book sent to corporate recruiters.
          </p>
        </div>

        {/* Reason - cash price */}
        <div className="pivot-reason pivot-reason--cash-price">
          <img
            src="img/glitch-overlay-price-begin.svg"
            alt=""
            className="glitch-effect"
          />
          <h3 className="centered-text">Suprise! Cash prize!</h3>
          <p className="centered-text">
            In addition to presenting in front of a panel of industry
            professionals, Teams will be competing for a prize fund of{" "}
            <strong>up to $1400.</strong>
          </p>
          <div className="cash-price-container">
            <div className="cash-price">
              <div className="cash-price__value">$200</div>
              <div className="cash-price__position">
                1<sup>st</sup> place - per member
              </div>
            </div>
            <div className="cash-price">
              <div className="cash-price__value">$100</div>
              <div className="cash-price__position">
                2<sup>nd</sup> place - per member
              </div>
            </div>
            <div className="cash-price">
              <div className="cash-price__value">$50</div>
              <div className="cash-price__position">
                3<sup>rd</sup> place - per member
              </div>
            </div>
          </div>
          <img
            src="img/glitch-overlay-price-end.svg"
            alt=""
            className="glitch-effect"
          />
        </div>
      </section>
    );
  }
}

export default why;
