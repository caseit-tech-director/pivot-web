import { useRef, useState, useEffect } from "react";

const useElementMeasurement = (dependencies = []) => {
  const [offset, setOffset] = useState(null);
  const nodeRef = useRef(null);

  // funciton for saving the value to node
  const computeClientRect = () => {
    const boundingRect = nodeRef.current.getBoundingClientRect();
    const x = boundingRect.left;
    const y = nodeRef.current.offsetTop;
    const width = boundingRect.width;
    const height = boundingRect.height;

    setOffset({
      x: x,
      y: y,
      width: width,
      height: height,
      centerX: x + width / 2,
      centerY: y + height / 2,
    });
  };

  // recompute value when the window resizes
  useEffect(() => {
    window.addEventListener("resize", computeClientRect);
    return () => {
      window.removeEventListener("resize", computeClientRect);
    };
  }, []);

  const updateDependencies = dependencies ? dependencies : [];

  // recompute the value if the deps changes
  useEffect(() => {
    computeClientRect();
  }, updateDependencies);

  return [offset, nodeRef];
};

export default useElementMeasurement;
