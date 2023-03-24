import styles from './SoyBurger.module.scss';

export interface ISoyBurger {
}

const SoyBurger: React.FC<ISoyBurger> = () => {
  return (
        <div className={styles.container}>
          <ul onClick={(event) => event.preventDefault()}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/founder">Founder</a>
            </li>
            <li>
              <a href="/ethics">Ethics</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
  );
};

export default SoyBurger;