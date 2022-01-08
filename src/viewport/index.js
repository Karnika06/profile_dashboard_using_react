import React, { useContext } from "react";
import { ViewportContext } from "./Viewportprovider";

const useViewport = () => {
    const { width, height } = useContext(ViewportContext);
    const isMobile = width < 475;
    const isTablet = width < 1200;
    return { width, height, isMobile, isTablet };
  };
  
  export default useViewport;
