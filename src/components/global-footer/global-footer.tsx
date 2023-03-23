import styles from "./global-footer.module.css";

type Props = {};

const GlobalFooter = ({}: Props): JSX.Element => {
  return (
    <div className={styles.globalfootercontainer}>
      <p>Powered By Electricity!</p>
    </div>
  );
};

export default GlobalFooter;
