import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contact.items;
export const getFilter = state => state.contact.filter;

export const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normaliezedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliezedFilter),
    );
  },
);
