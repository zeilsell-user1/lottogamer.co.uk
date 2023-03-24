import Layout from "../../src/components/layout/layout";
import styles from "../../styles/Home.module.css";

export default function poolsProductPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="Richard's pools product page">
        <div className={styles.pagesection}>
          <p>This page contains the pools products</p>
        </div>
      </Layout>
    </div>
  );
}
