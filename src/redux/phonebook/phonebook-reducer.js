import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './phonebook-actions';
import * as contactsOperation from './phonebook-operation';

const { fetchContacts, addContact, deleteContact } = contactsOperation;

const { changeFilter } = contactsActions;

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const error = createReducer(null, {
  [fetchContacts.pending]: () => null,
  [addContact.pending]: () => null,
  [deleteContact.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactReducer = combineReducers({
  items,
  error,
  loading,
  filter,
});

export default contactReducer;
