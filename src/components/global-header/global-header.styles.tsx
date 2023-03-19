import styled from "styled-components";

// common to both mobile and desktop

export const GlobalNav = styled.div`
  background: orange;
`;

export const LogoImg = styled.img`
  margin-left: 1vh;
  aspect-ratio: 1;
  margin: 1vh;
`;

// mobile layout

export const GlobalNavMobileContainer = styled.div`
  display: grid;
  grid-template-columns: 3;
  grid-template-areas: "logo buttons burger";
  column-gap: 1vh;
`;

export const GlobalNavMobileBurger = styled.div`
  grid-row-start 1;
  grid-column-start: 3;
  justify-self: end;
`;

export const BurgerImg = styled.img`
  margin-left: 1vh;
  aspect-ratio: 1;
  margin: 1vh;
`;

// desktop layout

export const GlobalNavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 3fr;
  grid-template-areas: "logo links buttons";
  column-gap: 1vh;
`;

export const GlobalNavItem = styled.div`
  justify-self: stretch;
  align-self: stretch;
`;

export const GlobalNavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  margin: 1vh;
  align-items: start;
  justify-items: center;
  column-gap: 1vh;
`;

export const NavbarButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const NavLinkContainer = styled.div`
  color: black;

  &:hover {
    color: red;
  }
`;

export const NavSubLink = styled.div<{ isVisible: boolean }>`
  color: blue;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  &:hover {
    color: red;
  }
`;
