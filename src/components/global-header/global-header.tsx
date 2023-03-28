import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import styles from "./global-header.module.css";

// the logo and the list of upto 5 navigation options are provided by the CMS.
// included in CMS behaviours are the utility functions to manipulate images

import {
  getLogo,
  getImageUrl,
  CmsImage,
  CmsNavItem,
  getBurger,
} from "../../features/cms-access";

import {
  GenericButton,
  ButtonStyles,
} from "@zeilsell-user1/generic-button-component";

type Props = {
  menu: CmsNavItem[];
  breakpoint: number;
  callback: () => void;
};

const GlobalHeader = ({ menu, breakpoint, callback }: Props): JSX.Element => {
  // read the header logo and nav data from the CMS on every page load

  const [logo, setLogo] = useState({} as CmsImage);
  const [burger, setBurger] = useState({} as CmsImage);

  const fillOutHeaderLogo = async () => {
    const logoCallback = (logoData: CmsImage) => {
      setLogo(logoData);
    };
    getLogo(logoCallback);
  };

  const fillOutHeaderBurger = async () => {
    const burgerCallback = (burgerData: CmsImage) => {
      setBurger(burgerData);
    };
    getBurger(burgerCallback);
  };

  useEffect(() => {
    fillOutHeaderLogo();
    fillOutHeaderBurger();
  }, []);

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

  // render the menu items in desktop format

  const renderMenu = (item: CmsNavItem, index: number): JSX.Element => {
    if (!item?.enabled || !item?.url) {
      return <div />;
    }
    return (
      <NavLink
        key={item.key}
        url={item.url}
        title={item.title}
        description={item.description}
        subMenuItems={item.subMenuItems}
      />
    );
  };

  // add the logo and burger images or handle failure elegantly

  const addLogoToHeader = () => {
    if (logo.reference != undefined) {
      const logoUrl: string = getImageUrl(logo.reference, 50, 50);
      return (
        <div className={styles.imagediv}>
          <Image
            className={styles.logoImage}
            src={logoUrl}
            width="50"
            height="50"
            alt={logo.caption}
          />
        </div>
      );
    } else {
      return (
        <div className={styles.imagediv}>
          <Image
            className={styles.logoImage}
            src="/blanklogo.jpg"
            width="50"
            height="50"
            alt="temp logo"
          />
        </div>
      );
    }
  };

  const addBurgerToHeader = () => {
    if (burger.reference != undefined) {
      const burgerUrl: string = getImageUrl(burger.reference, 30, 30);
      return (
        <Image
          className={styles.burgerImage}
          src={burgerUrl}
          width="50"
          height="50"
          alt={burger.caption}
        />
      );
    } else {
      return (
        <Image
          className={styles.burgerImage}
          src="/blanklogo.jpg"
          width="50"
          height="50"
          alt="temp logo"
        />
      );
    }
  };

  // return the JSX element

  return (
    <div className={styles.globalnav}>
      {isBreakpoint ? (
        /* the mobile view of the global nav */
        <div className={styles.globalnavmobilecontainer}>
          <div className={styles.imagediv}>
            <Link href="/">{addLogoToHeader()}</Link>
          </div>
          <div>
            <div className={styles.navbarbuttons}>
              <GenericButton style={ButtonStyles.ACTIVECTA} text="phone" />
              <GenericButton style={ButtonStyles.ACTIVECTA} text="email" />
            </div>
          </div>
          <div
            className={styles.globalnavmobileburger}
            onClick={() => callback()}
          >
            <GenericButton style={ButtonStyles.INACTIVECTA}>
              {addBurgerToHeader()}
            </GenericButton>
          </div>
        </div>
      ) : (
        /* the desktop view of the global nav */
        <div className={styles.globalnavcontainer}>
          <div className={styles.globalnavitem}>
            <Link href="/">{addLogoToHeader()}</Link>
          </div>
          <div className={styles.globalnavitem}>
            <div className={styles.globalnavmenu}>
              {menu[0] && menu.map((item, index) => renderMenu(item, index))}
            </div>
          </div>
          <div className={styles.globalnavitem}>
            <div>
              <div className={styles.navbarbuttons}>
                <GenericButton style={ButtonStyles.ACTIVECTA} text="phone" />
                <GenericButton style={ButtonStyles.ACTIVECTA} text="email" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalHeader;
