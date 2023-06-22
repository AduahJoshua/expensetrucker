import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    expenses: [
        {
            id: nanoid(),
            item: "Spoon",
            date: "02/04/2000",
            amountPaid: "0",
            category: "Food and Drink"
        },
        {
            id: nanoid(),
            item: "Spoon",
            date: "02/04/2000",
            amountPaid: "0",
            category: "Food and Drink"
        }
    ]
}

const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses = [...state.expenses, action.payload];
        },
        editExpense: (state, action) => {
            state.expenses = state.expenses.map((expense) =>
                expense.id === action.payload.id ? action.payload : expense
            );
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter(
                (expense) => expense.id !== action.payload
            );
        },
    },
});


export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions

export default expenseSlice.reducer