import {
  AspectRatio,
  CrossSellTile,
  Size,
} from "@zeilsell-user1/cross-sell-component";
import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="lottogamer.co.uk - the coolest site for lotto games!">
        <div className={styles.pagesection}>
          <h1>Welcome to lottogamer.co.uk!</h1>
          <h2>
            We are the #1 place in the UK to find games, tools and fun based on
            lotto
          </h2>
          <p>
            Do you want to know what are your lucky numbers? How about the
            chances of you winning?
          </p>
          <p>We are NOT a gambling site!</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className={styles.pagesection}>
          <CrossSellTile
            imageUrl="./bingo-7318132_1280.jpg"
            targetUrl="product/lotto"
            title="Feeling lucky today?"
            titleColor="orange"
            strapline="Try out our amazing lotto tools!"
            straplineColor="darkorange"
            description="limited time offer that is applicable to monkeys only. Do not apply if you are green or over 300"
            descriptionColor="white"
            size={Size.large}
            ratio={AspectRatio.widescreen}
          />
        </div>
      </Layout>
    </div>
  );
}
