import { useState } from "react";
import styles from "./SearchBar.module.css";
import Button from "../Button/Button";

interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch?: (q: string) => void;
}

export default function SearchBar({
  placeholder = "Search...",
  buttonLabel = "Search",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSearch?.(query);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="primary" size="medium" onClick={() => onSearch?.(query)}>
        {buttonLabel}
      </Button>
    </form>
  );
}
