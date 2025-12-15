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

export default function PreviewCard({
  colourVariant,
  par,
  yards,
  rating,
  slope,
  onClick,
  image,
  courseName,
  location,
  distance
}: PreviewCardProps) {
  return (
    <button
      className={classNames(
        styles.previewCard,
        styles[`colourVariant${colourVariant}`]
      )}
      onClick={onClick}
    >
      <div className={styles.coursePhoto}>
        <img src={image} />
      </div>
      <div className={styles.courseInfo}>
        <div className={styles.courseText}>
          <h3 className={styles.title}>
            {courseName}
          </h3>
          <div className={styles.locationRow}>
            <p className={styles.location}>
              {location}
            </p>
            <p className={styles.location}>
              ({distance} miles)
            </p>
          </div>
        </div>
        <div className={styles.courseDetailsContainer}>
          <CourseDetails value={par ?? 0} category="Par" />
          <CourseDetails value={yards ?? 0} category="Yards" />
          <CourseDetails value={rating ?? 0} category="Rating" />
          <CourseDetails value={slope ?? 0} category="Slope" />
        </div>
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
  /* course detail props */
  par?: number;
  yards?: number;
  rating?: number;
  slope?: number;
  image?: string;
  courseName?: string;
  location?: string;
  distance?: number;
}
