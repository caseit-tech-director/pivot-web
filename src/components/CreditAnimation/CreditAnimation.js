import React, { useEffect } from "react";
import TeamHeadshot from "./TeamHeadshot";
import "./CreditAnimation.scss";
import useElementMeasurement from "../../hooks/useElementMeasurement";

import PivotTeam from "../../data/PivotTeam";

// https://www.npmjs.com/package/@chriscourses/perlin-noise
import { noise } from "@chriscourses/perlin-noise";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";

const CreditAnimation = ({ className }) => {
  const noOfTeamMember = PivotTeam.length;
  const [measurement, containerRef] = useElementMeasurement([]);

  return (
    <div className={`credit-animation ${className}`} ref={containerRef}>
      <div className="credit-animation__overlay"></div>
      {PivotTeam.map((pivotTeamPerson, index) => {
        return (
          <ScrollingItem
            {...pivotTeamPerson}
            key={index}
            index={index}
            totalItemCount={noOfTeamMember}
            containerMeasurement={measurement}
          />
        );
      })}
    </div>
  );
};

const ScrollingItem = ({
  name,
  position,
  image,
  index,
  totalItemCount,
  containerMeasurement,
}) => {
  const scrollCompletion = useMotionValue(0);
  const [measurement, containerRef] = useElementMeasurement([]);

  const SCROLLING_DURATION = 15;

  useEffect(() => {
    const resetAnimation = () => {
      scrollCompletion.set(0);
      const controls = animate(scrollCompletion, 1, {
        type: "tween",
        ease: "linear",
        duration: SCROLLING_DURATION,
        repeat: Infinity,
        delay: (SCROLLING_DURATION / totalItemCount) * index,
      });
    };
    // delay the beginning of each animation, acheiving that constantly following effect
    // setTimeout();
    resetAnimation();
    // return controls.stop;
  }, []);
  const scrollLength =
    measurement !== null
      ? totalItemCount * measurement.height + containerMeasurement.height
      : 0;
  const yOffset = useTransform(scrollCompletion, [0, 1], [0, -scrollLength]);

  // use noise instead of random so that the layou wouldn't jump around when re-render
  const xOffset =
    containerMeasurement !== null
      ? noise(index) * (containerMeasurement.width - measurement.width)
      : 0;

  return (
    <motion.div
      // variants={animation}
      style={{ y: yOffset, x: xOffset }}
      className="credit-animation__item"
      ref={containerRef}
    >
      <TeamHeadshot key={index} name={name} position={position} image={image} />
    </motion.div>
  );
};
export default CreditAnimation;
