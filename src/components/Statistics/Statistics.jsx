import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import { generateRandomColor } from "../../utils/randomColor";

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css["stat-list"]}>
        {stats.map((stat) => {
          const { id, label, percentage } = stat;
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: generateRandomColor() }}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
