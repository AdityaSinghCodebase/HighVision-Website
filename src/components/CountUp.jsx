import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, to, {
      duration: 2,
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = Math.round(value) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default CountUp;
