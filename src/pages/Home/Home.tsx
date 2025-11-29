import Button from "../../components/Button/Button";
import styles from "./Home.module.css";
import globalStyles from "../../styles/global.module.css";
import MasonryWall from "../../components/MasonryWall/MasonryWall";

export default function Home() {
  return (
    <section className={globalStyles.section}>
      <div style={{ paddingTop: 64 }} />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Find your next favourite course</h1>
          <h2 className={styles.subtitle}>
            Search by location, course name or postcode
          </h2>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />
            <Button type="primary" size="medium">
              Search
            </Button>
          </div>
          <div style={{ paddingTop: 24 }} />
          <MasonryWall />
        </div>
      </div>
    </section>
  );
}
