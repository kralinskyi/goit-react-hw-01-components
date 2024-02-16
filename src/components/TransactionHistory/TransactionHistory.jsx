import { TableHead } from './TableHead';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  if (!items) return null;
  return <TableHead items={items} />;
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
