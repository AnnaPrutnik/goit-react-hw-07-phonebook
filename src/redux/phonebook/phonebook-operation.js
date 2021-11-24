import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://619e058d131c60001708928a.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const { data } = await axios('/contacts');
  return data;
});

export const addContact = createAsyncThunk('contacts/add', async userData => {
  const responce = await axios.post('/contacts', userData);
  return responce.data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const responce = await axios.delete(`/contacts/${id}`);
  return responce.data.id;
});
