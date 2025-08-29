"use client";

import { FaSearch } from "react-icons/fa";
import styles from "./consult2.module.css";

export default function TopRatedSection({searchValue, setSearchValue}) {

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchValue);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Let&apos;s find you a doctor</h1>

      <form onSubmit={handleSearchSubmit} className={styles.form} role="search">
        <FaSearch className={styles.icon} aria-hidden="true" />

        <label htmlFor="doctor-search" className="sr-only">
          Search for doctors and therapists
        </label>

        <input
          id="doctor-search"
          type="search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search doctors, therapist..."
          className={styles.input}
          aria-label="Search for doctors and therapists"
        />
      </form>
    </section>
  );
}
