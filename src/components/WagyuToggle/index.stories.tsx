import React, { useState } from "react";
import WagyuToggle from "./WagyuToggle";

export default {
  title: "Components/WagyuToggle",
  component: WagyuToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <WagyuToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <WagyuToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
