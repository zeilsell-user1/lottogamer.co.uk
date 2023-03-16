//import { CrossSellTile, Size, AspectRatio } from "@zeilsell-user1/cross-sell-component";
import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {

  return (
    <div className={styles.container}>
      <Layout title="lottogamer.co.uk - the coolest site for lotto games!">
        <p>this is content</p>
      </Layout>
    </div>
  );
}

/*

        <CrossSellTile
          targetUrl="/product/lotto"
          title="Feel Lucky?"
          titleColor="orange"
          strapline="Try out our amazing lotto tools!"
          straplineColor="darkorange"
          ctaText="Play!"
          ctaTextColour="blue"
          size={Size.medium}
          ratio={AspectRatio.widescreen}
          imageUrl='./bingo-7318132_1280.jpg' />
          */