// store.js

import { createStore, applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

// Define initial state
const initialState = {
  expenses: [],
  incomes: [],
};

// Define action types
const ADD_EXPENSE = 'ADD_EXPENSE';
const ADD_INCOME = 'ADD_INCOME';
const ADD_ALL = 'ADD_ALL';
const SET_EXPENSES = 'SET_EXPENSES';

// Define actions
export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const addIncome = (income) => ({
  type: ADD_INCOME,
  payload: income,
});

export const setAll = (data) => ({
    type: ADD_ALL,
    payload: data,
})

export const setExpenses = (data) => ({
    type: SET_EXPENSES,
    payload: data
})

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    case ADD_ALL:
        return {
            ...state,
            incomes: [...state.incomes, action.payload.filter(inc => inc.type === "credit")],
            expenses: [...state.expenses, action.payload.filter(inc => inc.type === "debit")]
        }
    case SET_EXPENSES:
        return {
            ...state,
            expenses: [ ...action.payload]
        }
    default:
      return state;
  }
};

// Create and export the store
const makeStore = () => createStore(reducer, applyMiddleware(thunk));
export const wrapper = createWrapper(makeStore);
