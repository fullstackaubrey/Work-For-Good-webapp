import styles from "./Nav.module.scss";
import { TbClover } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import SoyBurger from "./SoyBurger";

export interface INav {}

const Nav: React.FC<INav> = () => {
  const [isSoyBurger, setSoyBurger] = useState(false);
  const soyBurgerHandler = () => {
    setSoyBurger(!isSoyBurger);
    console.log(isSoyBurger);
  };

  return (
    <div>
      <header className={styles.header}>
        <div>
          <h1>
            Work For Good <TbClover className={styles.logo} />
          </h1>
        </div>
        <nav>
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
              <a href="/careers">Join Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <div className={styles.menuContainer}>
              <div className={styles.menu}>
                <GiHamburgerMenu onClick={soyBurgerHandler} />
              </div>
            </div>
          </ul>
        </nav>
      </header>
      {isSoyBurger ? <SoyBurger /> : null}
    </div>
  );
};

export default Nav;
