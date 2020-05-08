import React from 'react';
import styled from '@emotion/styled';
import ContentBox from '../ContentBox';
import { COLORS, SHADES } from '@/shared/theme';

const FooterWrapper = styled.footer`
  background-color: ${COLORS.DARK[6]};
  color: ${SHADES.WHITE};
`;

const FooterNavigation = styled.nav`

`;

const FooterNavigationItem = styled.a`

`;

const FooterCopyright = styled.div`

`;

const FooterBadges = styled.div`
  display: flex;
  justify-items: space-between;
`;

const FooterBadgePanel = styled.div`
  flex: 1 1 auto;
`;

const FooterBadge = styled.div<{ src: string }>`
  ${({ src }) => `
    background-image: url(${process.env.PUBLIC_URL}/images/${src}-white.svg);
    background-repeat: none;
    height: 50px;
    width: auto;
  `}
`;



const Footer = () => {

  return (
    <FooterWrapper>
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
            <FooterBadge src="social/facebook" />
            <FooterBadge src="social/twitter" />
            <FooterBadge src="social/instagram" />
          </FooterBadgePanel>
          <FooterBadgePanel>
            <FooterBadge src="" />
            <FooterBadge src="" />
          </FooterBadgePanel>
        </FooterBadges>
      </ContentBox>
    </FooterWrapper>
  );
};

export default Footer;