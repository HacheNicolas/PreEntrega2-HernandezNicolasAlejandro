import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import NavBarList from "./NavBarList";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          style={{ maxWidth: "80px" }}
          src="https://res.cloudinary.com/duxqgahbk/image/upload/v1678579975/ethiopiaLogoSinFondo_bqi8bt.png"
          alt="Logo Ethiopia"
        />
      </Link>
      <NavBarList />
      <CartWidget />
    </div>
  );
};

export default NavBar;
