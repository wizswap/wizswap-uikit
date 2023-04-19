import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  removeNav: boolean | undefined;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)<{removeNav: boolean | undefined}>`
  display: flex;
  align-items: center;
  .mobile-icon {
    padding-left: ${({ removeNav }) => (removeNav ? "8px" : "0px")};
    width: ${({ removeNav }) => (removeNav ? "162px" : "32px")};
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    padding-left: ${({ removeNav }) => (removeNav ? "18px" : "0px")};
    width: 174px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  
`;

const Logo: React.FC<Props> = ({ isPushed, removeNav, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {removeNav ?
        <>
          <LogoWithText className="desktop-icon" isDark={isDark} />
          <LogoWithText className="mobile-icon" isDark={isDark} />
        </>
        : (
          <>
            <LogoIcon className="mobile-icon" />
            <LogoWithText className="desktop-icon" isDark={isDark} />
          </>
        )}
    </>
  );

  return (
    <Flex>
      {!removeNav &&
        <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="14px">
          {isPushed ? (
            <HamburgerCloseIcon width="24px" color="textSubtle" />
          ) : (
            <HamburgerIcon width="24px" color="textSubtle" />
          )}
        </MenuButton>}
      {isAbsoluteUrl ? (
        <StyledLink as="a" removeNav={removeNav} href={href} aria-label="MaxxSwap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink removeNav={removeNav} to={href} aria-label="MaxxSwap home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
