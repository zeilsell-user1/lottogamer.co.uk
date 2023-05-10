import { BasicLottoBoard } from "@zeilsell-user1/basic-lotto-board";
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
        <h1>Basic Lotto Board</h1>
        <div className={styles.pagesection}>
          <div>
            <BasicLottoBoard text="Default Board" />
          </div>
        </div>
        <h1>Duck shoot!</h1>
        <div className={styles.pagesection}>
          <div>
            <DuckShootLotto />
          </div>
        </div>
      </Layout>
    </div>
  );
}
