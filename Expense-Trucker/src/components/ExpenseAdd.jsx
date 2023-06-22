import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addExpense } from '../slices/expenseSlice';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';


const ExpenseAdd = () => {
    const [expense, setExpense] = useState({
        item: "",
        date: "",
        amountPaid: "",
        category: ""
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(expense);
        dispatch(addExpense(expense));

    };

    const handleChange = (e) => {
        e.preventDefault()
        setExpense({
            ...expense,
            id: nanoid(),
            [e.target.name]: e.target.value,
        });
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Item</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item" name="item"
                        value={expense.item}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date"
                        value={expense.date}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Amount Paid </Form.Label>
                    <Form.Control type="text" placeholder='Enter Amount' name="amountPaid"
                        value={expense.amountPaid}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Category"
                        name="category"
                        value={expense.category}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ExpenseAdd;