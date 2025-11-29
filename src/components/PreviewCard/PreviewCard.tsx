import styles from "./PreviewCard.module.css";
import classNames from "classnames";

const CourseDetails = ({ value, category }: CourseDetailsProps) => {
  return (
    <div className={styles.courseDetails}>
      <p className={styles.detailValue}>
        {value}
      </p>
      <p className={styles.detailCategory}>
        {category}
      </p>
    </div>
  );
};

export default function PreviewCard({ colourVariant }: PreviewCardProps) {
  return (
    <button
      className={classNames(
        styles.previewCard,
        styles[`colourVariant${colourVariant}`]
      )}
    >
      <div className={styles.courseText}>
        <h3 className={styles.title}>Stoneleigh Deer Park Golf Club</h3>
        <div className={styles.locationRow}>
          <p className={styles.location}>Stoneleigh</p>
          <p className={styles.location}>(Distance)</p>
        </div>
      </div>
      <div className={styles.courseDetailsContainer}>
        <CourseDetails value={72} category="Par" />
        <CourseDetails value={6500} category="Yards" />
        <CourseDetails value={72.5} category="Rating" />
        <CourseDetails value={120} category="Slope" />
      </div>
    </button>
  );
}

interface CourseDetailsProps {
  value: number;
  category: string;
}

interface PreviewCardProps {
  isDisabled?: boolean;
  onClick?: () => void;
  colourVariant:
    | "Gray"
    | "Blue"
    | "Green"
    | "Red"
    | "Yellow"
    | "Pink"
    | "Purple"
    | "Orange";
}
