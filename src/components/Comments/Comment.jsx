import css from './Comments.module.css';

export function Comment({ text, author, date }) {
  return (
    <li className={css.comment}>
      <p className={css.text}>{text}</p>
      <p className={css.author}>by {author}</p>
      <p className={css.date}>{date}</p>
    </li>
  );
}
