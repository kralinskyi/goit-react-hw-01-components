import { Comment } from './Comment';
import css from './Comments.module.css';
import PropTypes from 'prop-types';

export function Comments({ comments }) {
  return (
    <div>
      <h2 className={css['comments-title']}>Comments</h2>
      <ul className={css.comments}>
        {comments.map(({ id, text, author, date }) => (
          <Comment key={id} text={text} author={author} date={date} />
        ))}
      </ul>
    </div>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};
