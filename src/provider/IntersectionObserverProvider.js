import React, { createContext, useEffect, useRef } from "react";
import * as animated from "..//styles/animated.module.scss"
//createContextオブジェクトを用意する
export const ObserverContext = createContext({});
export function IntersectionObserverProvider(props) {
  const { children } = props;
  const options = {
    rootMargin: "-20% 0px",
    once: false,
  };
  const targets = useRef([]);
  const toTargets = (e) => {
    if (e && !targets.current?.includes(e)) {
      targets.current.push(e);
    }
  };
  useEffect(() => {
    targets.current.forEach((target) => {
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animated.isAnimated);
          }
        });
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(target);
    });
  }, [targets]); //eslint-disable-line

  return (
    <>
      <ObserverContext.Provider value={{ toTargets }}>{children}</ObserverContext.Provider>
    </>
  );
}
