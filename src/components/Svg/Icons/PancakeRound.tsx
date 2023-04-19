import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image href="/maxxswap-logo.png" width="90"></image>
    </Svg>
  );
};

export default Icon;
