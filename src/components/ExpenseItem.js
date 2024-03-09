import React, { useContext } from 'react';
import { TiDelete, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense
        });

        console.log(expense)
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><TiMinus size='1.5em' onClick={(e)=> handleDeleteExpense(props.name)}></TiMinus></td>
        </tr>
    );
};
export default ExpenseItem;
