import Button from "../../components/Button/Button";
import styles from "./Search.module.css";
import globalStyles from "../../styles/global.module.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import Icon from "../../components/Icon/Icon";

import FilterIcon from "../../assets/icons/filter.svg";

export default function Search(results?: React.ReactNode) {
  return (
    <section className={globalStyles.section}>
      <div style={{ paddingTop: 24 }} />
      <div className={styles.searchBar}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <Button type="primary" size="medium">
            Search
          </Button>
          <Button type="primary" size="medium">
            <Icon icon={FilterIcon} color="white" size={22} />
          </Button>
        </div>
      </div>
      <div style={{ paddingTop: 24 }} />
      <div className={styles.searchResults}>
        <PreviewCard colourVariant="Red" />
        <PreviewCard colourVariant="Gray" />
        <PreviewCard colourVariant="Blue" />
        <PreviewCard colourVariant="Green" />
        <PreviewCard colourVariant="Yellow" />
        <PreviewCard colourVariant="Pink" />
        <PreviewCard colourVariant="Purple" />
        <PreviewCard colourVariant="Orange" />
      </div>
    </section>
  );
}
