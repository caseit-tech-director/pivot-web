import React from "react";
import { Helmet } from "react-helmet";

import "../style/main.scss";

import HeroSection from "../components/sections/hero";
import AboutSection from "../components/sections/about";
import WhySection from "../components/sections/why";
import ScheduleSection from "../components/sections/schedule";
import TeamSection from "../components/sections/team";
import FaqSection from "../components/sections/faq";
import ContactSection from "../components/sections/contact";
import Footer from "../components/sections/footer";

import NavBar from "../components/Navbar";
import NavSectionMarker from "../components/Navbar/NavSectionMarker";
import { NavDataContext } from "../components/Navbar/NavContext";

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
  const timeLeftString = (() => {
    const daysLeft = Math.ceil(daysToAppsDeadline);

    if (daysLeft === 1) {
      const hoursLeft = Math.floor(
        PIVOT_APPS_DEADLINE_DATE.getHours() - new Date().getHours()
      );
      if (hoursLeft <= 1) {
        const minutesLeft = Math.floor(
          PIVOT_APPS_DEADLINE_DATE.getMinutes() - new Date().getMinutes()
        );
        return minutesLeft + "minutes";
      } else {
        return hoursLeft + " hours";
      }
    } else {
      return daysLeft + " days";
    }
  })();

  return (
    <>
      {/* meta data */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pivot - BTM Case Competition</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <NavDataContext>
        <NavBar />

        {/* hero section */}
        <HeroSection
          pivotBeginDate={PIVOT_BEGIN_DATE}
          pivotEndDate={PIVOT_END_DATE}
          daysLeft={daysToAppsDeadline}
          timeLeftString={timeLeftString}
          deadline={PIVOT_APPS_DEADLINE_DATE}
        />

        <main>
          <NavSectionMarker name="about">
            <AboutSection />
          </NavSectionMarker>
          <NavSectionMarker name="whyPivot">
            <WhySection />
          </NavSectionMarker>
          <NavSectionMarker name="schedule">
            <ScheduleSection />
          </NavSectionMarker>
          <NavSectionMarker name="team">
            <TeamSection
              timeLeftString={timeLeftString}
              date={PIVOT_APPS_DEADLINE_DATE}
            />
          </NavSectionMarker>
          <NavSectionMarker name="faq">
            <FaqSection />
          </NavSectionMarker>
          <NavSectionMarker name="contact">
            <ContactSection />
          </NavSectionMarker>
        </main>
        <Footer />
      </NavDataContext>
    </>
  );
};

export default HomePage;
