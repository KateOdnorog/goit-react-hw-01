import s from './TransactionHistory.module.css'

function TransactionHistory ({items}) {
  return (
    <>
    <h2>Task 3</h2>
    <table className={s.table}>
  <thead className={s.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(({ id, type, amount, currency }) => {
            return (
          <tr key={id}>
             <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
          </tr>
        );
        })}
      </tbody>
</table>

</>
    );
};

export default TransactionHistory;