import React from 'react';
import styled from '@emotion/styled';
import ContentBox from '../ContentBox';
import { COLORS, BREAKPOINT } from '@/shared/theme';

const FooterWrapper = styled.footer`
  background-color: ${COLORS.DARK[6]};
`;

const FooterNavigation = styled.nav`
  @media (max-width: ${BREAKPOINT.sm}) {
    text-align: center;
  }
`;

const FooterNavigationItem = styled.a`
  color: ${COLORS.GREY[5]};
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${COLORS.GREY[3]};
  }
  &:not(:last-of-type):after {
    content: '|';
    display: inline-block;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const FooterCopyright = styled.div`
  font-size: 0.8rem;
  color: ${COLORS.GREY[6]};
  margin: 1rem 0;
  @media (max-width: ${BREAKPOINT.sm}) {
    text-align: center;
  }
`;

const FooterBadges = styled.div`
  display: flex;
  justify-items: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const FooterBadgePanel = styled.div`
  flex: 1 1 auto;
  display: flex;

  @media (max-width: ${BREAKPOINT.sm}) {
    width: 100%;
    justify-content: center;
    margin: 1rem auto;
  }
`;

const FooterBadge = styled.div<{
  src: string;
  srcAlternate?: string;
  width?: string;
  height?: string;
}>`
  ${({ src, srcAlternate, width = '40px', height = '35px' }) => `
    background-image: url(${process.env.PUBLIC_URL}/images/${src});
    background-repeat: no-repeat;
    background-position: center center;
    width: ${width};
    height: ${height};
    background-size: ${width} ${height};
    margin: 0.5rem;
    cursor: pointer;
    &:hover, &:focus {
      background-image: url(${process.env.PUBLIC_URL}/images/${srcAlternate || src});
    }
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  `}
`;

const Footer = props => {
  return (
    <FooterWrapper {...props}>
      <ContentBox className="py-10 flex flex-col">
        <FooterNavigation>
          <FooterNavigationItem>Home</FooterNavigationItem>
          <FooterNavigationItem>Terms and Conditions</FooterNavigationItem>
          <FooterNavigationItem>Privacy Policy</FooterNavigationItem>
          <FooterNavigationItem>Collection Statement</FooterNavigationItem>
          <FooterNavigationItem>Help</FooterNavigationItem>
          <FooterNavigationItem>Manage Account</FooterNavigationItem>
        </FooterNavigation>
        <FooterCopyright>Copyright © 2020 DEMO Streaming. All Rights Reserved.</FooterCopyright>
        <FooterBadges>
          <FooterBadgePanel>
            <FooterBadge src="social/facebook-white.svg" srcAlternate="social/facebook-blue.svg" />
            <FooterBadge src="social/twitter-white.svg" srcAlternate="social/twitter-blue.svg" />
            <FooterBadge
              src="social/instagram-white.svg"
              srcAlternate="social/instagram-blue.svg"
            />
          </FooterBadgePanel>
          <FooterBadgePanel className="justify-end">
            <FooterBadge src="store/app-store.svg" width="120px" />
            <FooterBadge src="store/play-store.svg" width="120px" />
            <FooterBadge src="store/windows-store.svg" width="110px" />
          </FooterBadgePanel>
        </FooterBadges>
      </ContentBox>
    </FooterWrapper>
  );
};

export default Footer;
