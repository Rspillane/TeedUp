import styles from "./MasonryWall.module.css";

export default function MasonryWall() {
  return (
    <div className={styles.wall}>
      {/* Row 1 */}
      <div className={`${styles.tile} ${styles.tile1x1} ${styles.bgOrange}`}>
        <h3 className={styles.heading}>Par</h3>
      </div>
      <div className={`${styles.tile} ${styles.tile1x1} ${styles.bgTeal}`}>
        <h3 className={styles.heading}>Length</h3>
      </div>
      <div className={`${styles.tile} ${styles.tile2x2} ${styles.bgPurple}`}>
        <h3 className={`${styles.heading} ${styles.topLeft}`}>Location</h3>
      </div>
      <div className={`${styles.tile} ${styles.tile1x1} ${styles.bgGreen}`}>
        <h3 className={styles.heading}>Rating</h3>
      </div>
      {/* Row 2 */}
      <div className={`${styles.tile} ${styles.tile2x1} ${styles.bgRed}`}>
        <h3 className={`${styles.heading} ${styles.middleCenter}`}>
          Facilities
        </h3>
      </div>
      <div className={`${styles.tile} ${styles.tile1x1} ${styles.bgYellow}`}>
        <h3 className={styles.heading}>Slope</h3>
      </div>
    </div>
  );
}
