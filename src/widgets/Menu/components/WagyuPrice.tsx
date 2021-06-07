import React from "react";
import styled from "styled-components";
import { WagyuRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  wagyuPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const WagyuPrice: React.FC<Props> = ({ wagyuPriceUsd }) => {
  return wagyuPriceUsd ? (
    <PriceLink href="https://wagyuswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank">
      <WagyuRoundIcon width="32px" mr="8px" mt="5px" />
      <Text color="textSubtle" bold>{`$${wagyuPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(WagyuPrice);
