import Link from "next/link";
import Layout from "../src/components/layout/layout";
import styles from "../styles/Home.module.css";

export default function product(): JSX.Element {
  return (
    <div className={styles.container}>
      <Layout title="lottogamer.co.uk product hub page">
        <div className={styles.pagesection}>
          <p>This is a page for SEO additions</p>
          <Link href="/product/lotto">Lotto Games</Link>
          <Link href="/product/pools">Pools Games</Link>
        </div>
      </Layout>
    </div>
  );
}
