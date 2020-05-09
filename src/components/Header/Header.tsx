import React from 'react';
import styled from '@emotion/styled';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import { BASE_UNIT } from '@/shared/theme';

const HeaderWrapper = styled.div`
  height: ${BASE_UNIT * 40}px;
`;

interface HeaderProps {
  title: string;
}

const Header = ({ title, ...rest }: HeaderProps) => {
  return (
    <HeaderWrapper {...rest}>
      <HeaderTop />
      <HeaderBottom title={title} />
    </HeaderWrapper>
  );
};

export default Header;
