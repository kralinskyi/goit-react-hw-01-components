import css from './TransactionHistory.module.css';

export function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={css['transaction-item']}>
      <td className={css.transactionTd}>{type} </td>
      <td>{amount} </td>
      <td>{currency} </td>
    </tr>
  );
}
