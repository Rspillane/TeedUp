import { useEffect, useState, useMemo } from "react";
import Button from "../../components/Button/Button";
import styles from "./Search.module.css";
import globalStyles from "../../styles/global.module.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import Icon from "../../components/Icon/Icon";

import FilterIcon from "../../assets/icons/filter.svg?react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchGolfCourses } from "../../api/golfCourses";

type ResultItem = {
  id?: string | number;
  courseName?: string;
  name?: string;
  location?: string;
  distance?: number;
  par?: number;
  yards?: number;
  rating?: number;
  slope?: number;
  colourVariant?:
    | "Gray"
    | "Blue"
    | "Green"
    | "Red"
    | "Yellow"
    | "Pink"
    | "Purple"
    | "Orange";
};

const COLOURS: ResultItem["colourVariant"][] = [
  "Gray",
  "Blue",
  "Green",
  "Red",
  "Yellow",
  "Pink",
  "Purple",
  "Orange",
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const [results, setResults] = useState<ResultItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGolfCourses()
      .then((data) => {
        const courses = data.data ?? data;

        const mappedResults: ResultItem[] = courses.map((course: any) => ({
          id: course.id,
          courseName: course.name,
          location: [course.city, course.country].filter(Boolean).join(", "),
          distance: course.distance,
          par: course.par,
          yards: course.yards,
          rating: course.rating,
          slope: course.slope,
        }));

        setResults(mappedResults);
      })
      .catch(() => setError("Failed to load results"))
      .finally(() => setLoading(false));
  }, []);

  const filteredResults = useMemo(() => {
  if (!searchQuery) return results;

  const q = searchQuery.toLowerCase();

  return results.filter((item) => {
    return (
      item.courseName?.toLowerCase().includes(q) ||
      item.location?.toLowerCase().includes(q)
    );
  });
}, [results, searchQuery]);


  const items = filteredResults.slice(0, 20);


  return (
    <section className={globalStyles.section}>
      <div style={{ paddingTop: 24 }} />
      <SearchBar
  placeholder="Search course name or postcode"
  onSearch={setSearchQuery}
/>

      <Button type="primary" size="medium">
        <Icon icon={FilterIcon} color="white" size={22} />
      </Button>
      <div style={{ paddingTop: 24 }} />

      {loading && <p>Loading courses…</p>}
      {error && <p>{error}</p>}

      <div className={styles.searchResults}>
        {!loading && items.length === 0 ? (
          <p>No results</p>
        ) : (
          items.map((r, i) => (
            <PreviewCard
              key={r.id ?? i}
              colourVariant={"Gray"}
              courseName={r.courseName ?? r.name}
              location={r.location}
              distance={r.distance}
              par={r.par}
              yards={r.yards}
              rating={r.rating}
              slope={r.slope}
            />
          ))
        )}
      </div>
    </section>
  );
}
