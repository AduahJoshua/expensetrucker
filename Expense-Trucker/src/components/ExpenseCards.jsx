import React from 'react';
import { useSelector } from 'react-redux';


const ExpenseCards = () => {
    const state = useSelector((state) => {
        return state.expenseReducer;
    });

    return (
        <>
            {state.expenses.map((expense, index) => (
                <div key={index}>
                    <p>Item: {expense.item}</p>
                    <p>Date: {expense.date}</p>
                    <p>Amount Paid: {expense.amountPaid}</p>
                    <p>Category: {expense.category}</p>

                </div>
            ))}
        </>
    );
}

export default ExpenseCards;
