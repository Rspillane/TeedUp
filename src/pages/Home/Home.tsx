import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import globalStyles from "../../styles/global.module.css";
import MasonryWall from "../../components/MasonryWall/MasonryWall";

import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";

import SearchIcon from "../../assets/icons/icon_search.svg?react";
import SendIcon from "../../assets/icons/send.svg?react";

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
          <SearchBar />
          <div style={{ paddingTop: 24 }} />
          {/* <MasonryWall /> */}
        </div>
      </div>
      <h2 className={styles.title}>Features</h2>
      <div className={styles.featureGrid}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Icon icon={SearchIcon} />
          </div>
          <p className={styles.featureText}>
            Search by location, postcode, course name
          </p>
        </div>
        <div className={styles.feature}>
          {" "}<div className={styles.featureIcon}>
            <Icon icon={SearchIcon} />
          </div>
          <p className={styles.featureText}>Check the course length</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Icon icon={SearchIcon} />
          </div>
          <p className={styles.featureText}>
            Scout out the difficult courses in your area
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Icon icon={SearchIcon} />
          </div>
          <p className={styles.featureText}>
            Check what facilities are available before you arrive
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Icon icon={SearchIcon} />
          </div>
          <p className={styles.featureText}>
            Using our interactive map to see the exact locations
          </p>
        </div>
      </div>
      <h2 className={styles.title}>Get in touch</h2>
      <div className={styles.contactSection}>
        <form
          className={styles.contactForm}
          onSubmit={e => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            // For now just log the values. Hook this up to an API endpoint as needed.
            console.log({
              subject: data.get("subject"),
              email: data.get("email"),
              message: data.get("message")
            });
            // simple UX: reset the form
            form.reset();
          }}
        >
          <div className={styles.formRow}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Subject</span>
              <input
                name="subject"
                type="text"
                className={styles.input}
                required
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Email</span>
              <input
                name="email"
                type="email"
                className={styles.input}
                required
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Message</span>
              <textarea
                name="message"
                className={styles.textarea}
                rows={6}
                required
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <Button type="primary" size="medium">
              <Icon icon={SendIcon} color="white" size={22} />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
