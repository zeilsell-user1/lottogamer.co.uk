import { DuckShootLotto } from "@zeilsell-user1/duck-shoot-lotto";
import Layout from "../../src/components/layout/layout";
import styles from "../../styles/Home.module.css";

export default function lottoProductPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="Richard's lotto product page">
        <div className={styles.pagesection}>
          <p>This page contains the lotto products</p>
        </div>
        <div><DuckShootLotto text="Default Board" /></div>
      </Layout>
    </div>
  );
}
