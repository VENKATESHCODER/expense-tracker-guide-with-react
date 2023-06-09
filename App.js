import React,{ useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/New Expenses/newExpense';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    Location : 'Chennai'
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),Location : 'Mumbai' },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    Location : 'Kolkata'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    Location : 'Delhi'
  },
];
const App = () => {
  const[expenses,setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
