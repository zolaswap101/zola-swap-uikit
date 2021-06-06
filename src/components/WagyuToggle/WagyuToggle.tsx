import React from "react";
import { WagyuStack, WagyuInput, WagyuLabel } from "./StyledWagyuToggle";
import { WagyuToggleProps, scales } from "./types";

const WagyuToggle: React.FC<WagyuToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <WagyuStack scale={scale}>
    <WagyuInput id={props.id || "wagyu-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <WagyuLabel scale={scale} checked={checked} htmlFor={props.id || "wagyu-toggle"}>
      <div className="wagyus">
        <div className="wagyu" />
        <div className="wagyu" />
        <div className="wagyu" />
        <div className="butter" />
      </div>
    </WagyuLabel>
  </WagyuStack>
);

WagyuToggle.defaultProps = {
  scale: scales.MD,
};

export default WagyuToggle;
