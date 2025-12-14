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
  par = 72,
  yards = 6500,
  rating = 72.5,
  slope = 120,
  onClick,
  image,
  courseName = "Stoneleigh Deer Park Golf Club",
  location = "Stoneleigh",
  distance = 10
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
          <CourseDetails value={par} category="Par" />
          <CourseDetails value={yards} category="Yards" />
          <CourseDetails value={rating} category="Rating" />
          <CourseDetails value={slope} category="Slope" />
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
