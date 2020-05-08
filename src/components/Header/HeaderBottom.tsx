import React from 'react';
import styled from '@emotion/styled';
import { COLORS, SHADES, GRADIENTS } from '@/shared/theme';
import ContentBox from '../ContentBox';

const HeaderBottomWrapper = styled.div`
  height: 50%;
  background-image: ${GRADIENTS.DARK};
  background-color: ${COLORS.DARK[5]};
  color: ${SHADES.WHITE};
`;

interface HeaderBottomProps {
  title: string;
}

const HeaderBottom = ({
  title
}: HeaderBottomProps) => {
  return (
    <HeaderBottomWrapper>
      <ContentBox className="items-center">
        <h2>{title}</h2>
      </ContentBox>
    </HeaderBottomWrapper>
  );
};

export default HeaderBottom;