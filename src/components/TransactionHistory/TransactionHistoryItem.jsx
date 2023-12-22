import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export function TransactionHistoryItem({ type, amount, currency }) {
  //Якщо в transactions буде відсутнє щось, то весь компонент не відрендериться
  if (!type || !amount || !currency) {
    return null;
  }
  return (
    <tr className={css['transaction-item']}>
      <td className={css.transactionTd}>{type} </td>
      <td>{amount} </td>
      <td>{currency} </td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
