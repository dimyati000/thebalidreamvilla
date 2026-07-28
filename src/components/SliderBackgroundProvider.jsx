"use client";

import { createContext, useContext, useMemo, useState } from "react";

const SliderBackgroundContext = createContext(null);

export default function SliderBackgroundProvider({ children }) {
  const [activeSlideImage, setActiveSlideImage] = useState("/slider1.jpg");

  const value = useMemo(
    () => ({ activeSlideImage, setActiveSlideImage }),
    [activeSlideImage],
  );

  return (
    <SliderBackgroundContext.Provider value={value}>
      {children}
    </SliderBackgroundContext.Provider>
  );
}

export function useSliderBackground() {
  const context = useContext(SliderBackgroundContext);

  if (!context) {
    throw new Error(
      "useSliderBackground must be used inside SliderBackgroundProvider.",
    );
  }

  return context;
}