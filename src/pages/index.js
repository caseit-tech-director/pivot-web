import React from "react";
import { Helmet } from "react-helmet";

import "../style/main.scss";

import Hero from "../components/sections/Hero";

const PIVOT_APPS_LINK = "https://www.surveymonkey.ca/r/pivot2021";

// Calculating the important dates of pivot
const PIVOT_DATES = {
  appsDeadline: "2021-01-22",
  begin: "2021-01-30",
  end: "2021-02-06",
};

const PIVOT_APPS_DEADLINE_DATE = new Date(`2021-01-22T11:59`);
const PIVOT_BEGIN_DATE = new Date(`${PIVOT_DATES.begin}T00:00`);
const PIVOT_END_DATE = new Date(`${PIVOT_DATES.end}T00:00`);

const calcDifferenceInDays = (earlierDate, laterDate) => {
  if (!(earlierDate instanceof Date) && !(laterDate instanceof Date)) return;
  // To calculate the time difference of two dates
  const Difference_In_Time = laterDate.getTime() - earlierDate.getTime();
  // To calculate the no. of days between two dates
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  return Difference_In_Days;
};

const HomePage = () => {
  const daysToAppsDeadline = calcDifferenceInDays(
    new Date(),
    PIVOT_APPS_DEADLINE_DATE
  );
  console.log(Math.floor(daysToAppsDeadline));
  return (
    <>
      {/* meta data */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pivot BTM Case Competition</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      {/* hero section */}
      <Hero
        pivotBeginDate={PIVOT_BEGIN_DATE}
        pivotEndDate={PIVOT_END_DATE}
        daysLeft={daysToAppsDeadline}
        applicationLink={PIVOT_APPS_LINK}
      />

      <main className="full-width">
        <section id="about" className="centered-text">
          <h2>About pivot</h2>
          <p>
            Local rendition of CaseIT, the world’s premier MIS business case
            competition. Since 2017, PIVOT has welcomed over 300 competitors
            representing British Columbia’s various universities to compete in
            this rigorous and engaging competition.
          </p>
        </section>
        <section id="whyPivot">
          <h2>Are you ready for Pivot 2021</h2>
          {/* Reason 1 */}
          <div className="pivot-reason">
            <h3>Take on challenges</h3>
            <p>
              Test your abilities to further your problem-solving skills and
              compete against a pool of qualified teams.
            </p>
            <p>
              <strong>Work collaboratively</strong> to{" "}
              <strong>solve a real-life business problem</strong> and further
              your understanding of the rapidly-growing BTM industry
            </p>
            <p className="quote">
              “I came back to pivot in 2020 mainly because I also competed in
              2019, and it was an amazing experience. I also was hoping to test
              out the BTM knowledge I had gained in my MIS concentration in the
              last term.”
            </p>
            <div>John Doe - 2019</div>
          </div>
          {/* Reason 2 */}
          <div className="pivot-reason">
            <h3>Expand your network</h3>
            <p>
              Network with recruiters from top consulting firms, rapidly-growing
              startups, data-analytics companies and more.
            </p>
          </div>
          {/* Reason 3 */}
          <div className="pivot-reason">
            <h3>Gain Insight</h3>
            <p>
              Ask questions and learn from successful business professionals who
              have been in your shoes
            </p>

            {/* Sfu alumni */}
            {[
              {
                name: "John Doe",
                position: "consultant, SAP",
                image: "https://source.unsplash.com/random/800x600",
              },
              {
                name: "John Doe",
                position: "consultant, SAP",
                image: "https://source.unsplash.com/random/800x600",
              },
              {
                name: "John Doe",
                position: "consultant, SAP",
                image: "https://source.unsplash.com/random/800x600",
              },
            ].forEach((val) => {
              return (
                <div>
                  <img src={val.image} alt={`image of ${val.name}`} />
                  <div>{val.name}</div>
                  <div>{val.position}</div>
                </div>
              );
            })}
            <p>
              In our <strong>Interactive Firside Chat sessions</strong>, Panel
              of SFU alumni from the MIS industry sharing their experiences and
              tips for aspiring business professionals
            </p>
          </div>

          {/* Reason 4 */}
          <div className="pivot-reason">
            <h3>Recruitment Opportunities</h3>
            <p>
              Opportunity to include your resume in the PIVOT Competitor Resume
              Book sent to corporate recruiters.
            </p>
          </div>

          {/* Reason - cash price */}
          <div className="pivot-reason pivot-reason--cash-price">
            <h3>Suprise! Cash prize!</h3>
            <p>
              In addition to presenting in front of a panel of industry
              professionals, teams will be competing for a prize pool of{" "}
              <strong>up to $2400.</strong>
            </p>
            <div className="cash-price-container">
              <div className="cash-price">
                <div className="cash-price__value">$300</div>
                <div className="cash-price__position">
                  1<sup>st</sup> place - per member
                </div>
              </div>
              <div className="cash-price">
                <div className="cash-price__value">$200</div>
                <div className="cash-price__position">
                  2<sup>nd</sup> place - per member
                </div>
              </div>
              <div className="cash-price">
                <div className="cash-price__value">$100</div>
                <div className="cash-price__position">
                  3<sup>rd</sup> place - per member
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule">
          <h2>Competition Schedule</h2>
          <div className="footnotes">
            <h4>footnotes</h4>
            <p>
              All competitors present at the final presentations will be
              considered in the raffle. In the case that the winner is not
              present during the raffle draw, a redrawal will take place.
            </p>
          </div>
        </section>

        <section id="team">
          <h2>Team up and buckle up! </h2>
          <div>Deadline in 11 Days! (1/22)</div>
          <a href="https://www.facebook.com/groups/2959308947727798">
            Find my Team
          </a>
        </section>

        <section id="faq">
          <h2>Frequently Asked Question</h2>
        </section>

        <section id="contact">
          <h2>Not getting your answer?</h2>
          <div>pivot_btm@sfu.ca</div>
          <a href="https://www.facebook.com/PIVOTCaseCompetition">facebook</a>
          <a href="https://www.instagram.com/pivotcasecompetition/">
            instagram
          </a>
        </section>
      </main>

      <footer className="full-width">
        {/* inser logo here */}
        brought to you by the dedicated team of pivot 2021
      </footer>
    </>
  );
};

export default HomePage;
