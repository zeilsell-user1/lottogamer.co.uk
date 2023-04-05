import React, { ReactNode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Head from "next/head";
import styles from "./layout.module.css";
import GlobalHeader from "../global-header/global-header";
import GlobalFooter from "../global-footer/global-footer";
import { SlidingDrawer } from "@zeilsell-user1/sliding-drawer-component";
import {
  Accordion,
  AccordionItem,
  AccordionSubItem,
} from "@zeilsell-user1/accordion-component";
import {
  CmsNavItem,
  CmsSubNavItem,
  getNavItems,
} from "@/src/features/cms-access";

type Props = {
  children: ReactNode;
  title?: string;
};

const RootLayout = ({
  children,
  title = "Richard George Test Site",
}: Props): JSX.Element => {
  let container: Element;
  let root: ReactDOMClient.Root;

  function onClickBurgerOpen(): void {
    if (!container) {
      container = document.getElementById("slider") as Element;
      root = ReactDOMClient.createRoot(container);
    }

    root.render(
      <SlidingDrawer
        show={true}
        background="white"
        color="black"
        callback={onClickBurgerClose}
      >
        <Accordion items={mobileMenu} />
      </SlidingDrawer>
    );
  }

  function onClickBurgerClose(): void {
    root.render(
      <SlidingDrawer
        show={false}
        background="white"
        color="black"
        callback={onClickBurgerClose}
      >
        <Accordion items={mobileMenu} />
      </SlidingDrawer>
    );
  }

  // The menu is read from the CMS. The menu is displayed in the slider as an
  // accordion if in mobile view or int he header if in desktop. The functions
  // in this section are used to grab the content of the menu from the CMS and
  // to map the CMS menu to the format expected by the accordion.

  let desktopMenu: CmsNavItem[] = [] as CmsNavItem[];
  let mobileMenu: AccordionItem[] = [] as AccordionItem[];

  function mapSubItem(
    menuSubItem: CmsSubNavItem,
    mobileSubItems: AccordionSubItem[] | undefined
  ) {
    let mobileSubItem: AccordionSubItem = {
      key: menuSubItem.key,
      enabled: menuSubItem.enabled,
      title: menuSubItem.title,
      description: menuSubItem.description,
      url: menuSubItem.url,
    };

    if (!mobileSubItems) mobileSubItems = [] as AccordionSubItem[];

    mobileSubItems.push(mobileSubItem);
  }

  function mapItem(menuItem: CmsNavItem) {
    let mobileItem: AccordionItem = {
      key: menuItem.key,
      enabled: menuItem.enabled,
      title: menuItem.title,
      description: menuItem.description,
      url: menuItem.url,
      subItems: [] as AccordionSubItem[],
    };
    1;
    menuItem.subMenuItems?.map((subMenuItem) =>
      mapSubItem(subMenuItem, mobileItem.subItems)
    );

    // set the subitems to undefined as expected by accordion
    if (mobileItem.subItems?.length == 0) mobileItem.subItems = undefined;

    mobileMenu.push(mobileItem);
  }

  function mapMenuToAccordionItems(menu: CmsNavItem[]): AccordionItem[] {
    menu[0]
      ? menu.map((item) => mapItem(item))
      : (mobileMenu = [] as AccordionItem[]);

    console.log("mobile menu is ", mobileMenu);
    return mobileMenu;
  }

  const fillOutHeaderNavigationLinks = async () => {
    const navLinksCallback = (navItemsData: CmsNavItem[]) => {
      navItemsData.forEach((val) => desktopMenu.push(Object.assign({}, val)));
      mapMenuToAccordionItems(navItemsData);
    };
    getNavItems(navLinksCallback);
  };

  fillOutHeaderNavigationLinks();

  // return the JSX element

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Richard's test website using React and Next"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <GlobalHeader
          breakpoint={480}
          menu={desktopMenu}
          callback={onClickBurgerOpen}
        />
        <div className={styles.banner}>banner goes here</div>
        <div className={styles.content}>{children}</div>
        <GlobalFooter />
      </div>
      <div id="slider"></div>
    </div>
  );
};

export default RootLayout;
