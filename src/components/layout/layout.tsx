import React, { ReactNode, useState } from "react";
import Head from "next/head";
import GlobalHeader from "../global-header/global-header";
import GlobalFooter from "../global-footer/global-footer";

import { Page, PageItem, Banner, Content } from "./layout.styles";

import { SlidingDrawer } from "@zeilsell-user1/sliding-drawer-component";
import { Accordion } from "@zeilsell-user1/accordion-component";

import { itemList } from "../../__mocks__/test-menu";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Richard George Test Site",
}: Props): JSX.Element => {
  // the slider state and functions control if the slider is visible

  const [sliderVisible, setSliderVisible] = useState(false);

  function onClickBurgerOpen(): void {
    setSliderVisible(true);
  }

  function onClickBurgerClose(): void {
    setSliderVisible(false);
  }

  // return the JSX element

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Richard's test website using React and Next"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SlidingDrawer
        show={sliderVisible}
        background="white"
        color="black"
        callback={onClickBurgerClose}
      >
        <Accordion items={itemList} />
      </SlidingDrawer>
      <Page>
        <PageItem>
          <GlobalHeader breakpoint={480} callback={onClickBurgerOpen} />
        </PageItem>
        <PageItem>
          <Banner>banner goes here</Banner>
        </PageItem>
        <PageItem>
          <Content>{children}</Content>
        </PageItem>
        <PageItem>
          <GlobalFooter />
        </PageItem>
      </Page>
    </div>
  );
};

export default Layout;
