import React, { useMemo } from "react";

const PIVOT_APPS_DEADLINE_DATE = new Date(`2021-01-22T23:59`);

/*
 * Components versions of the dealine text
 */

// display the relative time with call to action copy
function ApplicationDeadlineText() {
  const text = useApplicationDeadlineText();
  return <>{text}</>;
}

// the closing date + time of the application
function ApplicationDeadlineTime() {
  return <>{formatDate(PIVOT_APPS_DEADLINE_DATE)}</>;
}

function isApplicationOver() {
  const now = new Date().getMilliseconds();
  const deadline = PIVOT_APPS_DEADLINE_DATE.getMilliseconds();

  return new now() - deadline > 0;
}

function useApplicationDeadlineText() {
  return useMemo(() => {
    const calcDifferenceInDays = (earlierDate, laterDate) => {
      if (!(earlierDate instanceof Date) && !(laterDate instanceof Date))
        return;
      // To calculate the time difference of two dates
      const Difference_In_Time = laterDate.getTime() - earlierDate.getTime();
      // To calculate the no. of days between two dates
      const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      return Difference_In_Days;
    };

    const deadlineTime = PIVOT_APPS_DEADLINE_DATE;

    const timeLeftString = ((deadlineTime) => {
      // return a date with a trailing decimals, indicating how much the date has passed
      const daysToAppsDeadline = calcDifferenceInDays(new Date(), deadlineTime);

      const daysLeft = Math.ceil(daysToAppsDeadline);

      // condition for last day, use hour to represents more of a sense of urgency
      if (daysLeft === 1) {
        const hoursLeft = Math.floor(
          deadlineTime.getHours() - new Date().getHours()
        );
        if (hoursLeft <= 1) {
          const minutesLeft = Math.floor(
            deadlineTime.getMinutes() - new Date().getMinutes()
          );
          return minutesLeft + "minutes";
        }
        return hoursLeft + " hours";
      } else if (daysLeft > 0) {
        return daysLeft + " days";
      } else if (daysLeft < 0) {
        // return null to indicate that the deadline is over
        return null;
      }
    })(deadlineTime);

    if (!timeLeftString) {
      return `Application closed on ${formatDate(deadlineTime)}`;
    } else {
      return `Closing in ${timeLeftString} (${formatDate(
        PIVOT_APPS_DEADLINE_DATE
      )})`;
    }
  });
}

function formatDate(time) {
  const month = time.getMonth() + 1; // javascript month starts from 0
  const day = time.getDate();
  const hourAndMinute = formatAMPM(time);

  return `${month}/${day} ${hourAndMinute}`;
}

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;

  return strTime;
}

export {
  useApplicationDeadlineText,
  ApplicationDeadlineText,
  isApplicationOver,
};
