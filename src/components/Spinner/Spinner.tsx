import React from "react";
import styled, { keyframes } from "styled-components";
import LogoIcon from "../Svg/Icons/Logo";
import { SpinnerProps } from "./types";

const wagyu = keyframes`
  from {
    transform: rotate(0deg) scale3d(1, 1, 1);
  }

  50% {
    transform: rotate(180deg) scale3d(1.2, 1.2, 1.2);;
  }

  to {
    transform: rotate(360deg) scale3d(1, 1, 1);
  }
`;

const Container = styled.div`
  position: relative;
`;

const WagyuLogoIcon = styled(LogoIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${wagyu} 2s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <WagyuLogoIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
