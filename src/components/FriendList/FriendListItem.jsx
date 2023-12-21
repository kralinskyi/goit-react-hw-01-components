import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export function FriendlistItem({ avatar, name, isOnline }) {
  const statusClasses = isOnline ? css.online : css.offline;
  return (
    <li className={css.item}>
      <span className={`${css.status} ${statusClasses}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendlistItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
