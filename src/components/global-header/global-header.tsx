import React, { ReactNode, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import NavLink from "./nav-link";

// the logo and the list of upto 5 navigation options are provided by the CMS.
// included in CMS behaviours are the utility functions to manipulate images

import {
  getLogo,
  getNavItems,
  getImageUrl,
  CmsImage,
  CmsNavItem,
  getBurger,
} from "../../features/cms-access";

import {
  GlobalNav,
  GlobalNavItem,
  LogoImg,
  GlobalNavMenu,
  NavbarButtons,
  BurgerImg,
  GlobalNavMobileContainer,
  GlobalNavContainer,
  GlobalNavMobileBurger,
} from "./global-header.styles";

import { GenericButton, ButtonTypes } from "../generic-button/generic-button";

type Props = {
  breakpoint: number;
  callback: () => void;
};

const GlobalHeader = ({
  breakpoint,
  callback,
}: Props): JSX.Element => {
  const [menu, setMenu] = useState({} as CmsNavItem[]);
  const [logo, setLogo] = useState({} as CmsImage);
  const [burger, setBurger] = useState({} as CmsImage);

  // read the header logo and nav data from the CMS on every page load

  useEffect(() => {
    !menu.length ? fillOutHeaderNavigationLinks() : console.info(menu);
    fillOutHeaderLogo();
    fillOutHeaderBurger();
  }, [menu]);

  // the calls to the state.set* functions are asynchronous. This userEffect demonstrates
  // this - if you put the console.info calls immediately after the call to setLogo then
  // the logo is still undefined. The useEffect is triggered whenever logo changes.

  useEffect(() => {
    console.log(logo.attribution);
    console.log(logo.caption);
    console.log(logo.reference);
  }, [logo]);

  useEffect(() => {
    console.log(burger.attribution);
    console.log(burger.caption);
    console.log(burger.reference);
  }, [burger]);

  // this function is used to switch from a desktop horizontal menu to a mobile
  // vertical one based on the screen size.

  const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, [updateTarget, width]);

    return targetReached;
  };
  
  const isBreakpoint = useMediaQuery(breakpoint);

  // functions used to grab the content and images from the CMS as callbacks

  const fillOutHeaderNavigationLinks = async () => {
    const navLinksCallback = (navItemsData: CmsNavItem[]) => {
      // the header nav links are ordered in the fetch from the CMS. If
      // not then enable this code to sort the nav items by order
      /*
      navItemsData.sort((a, b) => {
          if (a.order < b.order) return -1; 
          if (a.order > b.order) return 1;
          return 0;
        });
      */

      setMenu(navItemsData);
    };
    getNavItems(navLinksCallback);
  };

  // render the menu items in desktop format

  const renderMenu = (item: CmsNavItem, index: number) => {
    const linkKey = "top2".concat(item.title);

    if (!item || !item.enabled || !item.url) {
      return "empty" + index;
    }
    return (
      <NavLink
        key={linkKey}
        url={item.url}
        title={item.title}
        subMenuItems={item.subMenuItems}
      />
    );
  };

  // add the logo and burger images or handle failure elegantly

  const fillOutHeaderLogo = async () => {
    const logoCallback = (logoData: CmsImage) => {
      setLogo(logoData);
    };
    getLogo(logoCallback);
  };

  const addLogoToHeader = () => {
    if (logo.reference != undefined) {
      const logoUrl: string = getImageUrl(logo.reference, 50, 50);
      return <LogoImg src={logoUrl} alt={logo.caption} />;
    } else {
      return <LogoImg src="./blanklogo.jpg" alt="temp logo" />;
    }
  };

  const fillOutHeaderBurger = async () => {
    const burgerCallback = (burgerData: CmsImage) => {
      setBurger(burgerData);
    };
    getBurger(burgerCallback);
  };

  const addBurgerToHeader = () => {
    if (burger.reference != undefined) {
      const burgerUrl: string = getImageUrl(burger.reference, 30, 30);
      return <BurgerImg src={burgerUrl} alt={burger.caption} />;
    } else {
      return <BurgerImg src="./blanklogo.jpg" alt="temp logo" />;
    }
  };

  // return the JSX element

  return (
    <GlobalNav>
      {isBreakpoint ? 
      ( /* the mobile view of the global nav */ 
        <GlobalNavMobileContainer>
          <div>
            <Link href="/">{addLogoToHeader()}</Link>
          </div>
          <div>
            <NavbarButtons>
              <GenericButton style={ButtonTypes.ActiveCta} text="phone" />
              <GenericButton style={ButtonTypes.ActiveCta} text="email" />
            </NavbarButtons>
          </div>
          <GlobalNavMobileBurger onClick={() => callback()}>
            <GenericButton style={ButtonTypes.InactiveCta}>
              {addBurgerToHeader()}
            </GenericButton>
          </GlobalNavMobileBurger>
        </GlobalNavMobileContainer>
      ) : ( /* the desktop view of the global nav */ 
        <GlobalNavContainer>
          <GlobalNavItem>
            <div>
              <Link href="/">{addLogoToHeader()}</Link>
            </div>
          </GlobalNavItem>
          <GlobalNavItem>
            <GlobalNavMenu>
              {menu[0] && menu.map((item, index) => renderMenu(item, index))}
            </GlobalNavMenu>
          </GlobalNavItem>
          <GlobalNavItem>
            <div>
              <NavbarButtons>
                <GenericButton style={ButtonTypes.ActiveCta} text="phone" />
                <GenericButton style={ButtonTypes.ActiveCta} text="email" />
              </NavbarButtons>
            </div>
          </GlobalNavItem>
        </GlobalNavContainer>
      )}
    </GlobalNav>
  );
};

export default GlobalHeader;
