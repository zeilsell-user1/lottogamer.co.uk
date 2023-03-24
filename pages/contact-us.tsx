import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

export default function contactUs(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="lottogamer.co.uk contact us page">
        <div className={styles.pagesection}>
          <p>Email on contact@lottogamer.co.uk</p>
          <p>Phone on +44 (0) 1234 567890</p>
          <p>Post at 92 The Road, The Town, The Country. CO2 1NT</p>
        </div>
      </Layout>
    </div>
  );
}
