import { useState } from "react";
import styles from "./SearchBar.module.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import SearchIcon from "../../assets/icons/icon_search.svg?react";
import FilterIcon from "../../assets/icons/filter.svg?react";

interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch?: (q: string) => void;
}

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSearch?.(query);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <Button type="tertiary" size="medium" onClick={() => onSearch?.(query)}>
        <Icon icon={SearchIcon} color="black" size={22} />
      </Button>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="primary" size="medium" onClick={() => {}}>
        <Icon icon={FilterIcon} color="white" size={22} />
      </Button>
    </form>
  );
}
