import { useState } from "react";
import styles from "./Navbar.module.css";
import Button from "../../components/Button/Button"; // your reusable Button component
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      {/* Logo slot */}
      <div className={styles.logo}>
        <h1>Tee'd Up</h1>
      </div>

      {/* Desktop / larger screens links */}
      <div className={styles.navLinks}>
        <Button type="tertiary" size="small">
          <Link to="/">Home</Link>
        </Button>
        <Button type="tertiary" size="small">
          <Link to="/search">Search</Link>
        </Button>
        <Button type="tertiary" size="small">
          Map
        </Button>
        <Button type="tertiary" size="small">
          Contact
        </Button>
      </div>

      {/* Hamburger menu icon (mobile) */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={menuOpen ? styles.barOpen : styles.bar} />
        <span className={menuOpen ? styles.barOpen : styles.bar} />
        <span className={menuOpen ? styles.barOpen : styles.bar} />
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen &&
        <div className={styles.mobileMenu}>
          <Button type="tertiary" size="small">
            Home
          </Button>
          <Button type="tertiary" size="small">
            Search
          </Button>
          <Button type="tertiary" size="small">
            Map
          </Button>
          <Button type="tertiary" size="small">
            Contact
          </Button>
        </div>}
    </nav>
  );
}
