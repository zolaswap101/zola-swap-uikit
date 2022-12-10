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
    <PriceLink href="https://zolaswap.finance/info/token/0x8a226293bC6f697A681B0b29f825c149655fEC2d" target="_blank">
      <WagyuRoundIcon width="32px" mr="8px" mt="5px" />
      <Text color="textSubtle" bold>{`$${wagyuPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(WagyuPrice);
