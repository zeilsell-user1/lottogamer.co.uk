import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

export default function aboutUs(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="lottogamer.co.uk about us page">
        <p>lottogamer.co.uk</p>
        <p>
          We are the homw of cool games that help you find the luckiest numbers
        </p>
        <p>Contact deatils are made up, but the email is live</p>
      </Layout>
    </div>
  );
}
