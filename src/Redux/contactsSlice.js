import { createSlice, nanoid } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialContcatsState ={contacts: []};

const contactsSlice = createSlice({

    name: "Contacts",
    initialState: initialContcatsState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        contact,
                        id: nanoid(),
                    },
                };
            },
        },
        
        deleteContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        },
    }
});

const persistConfig = {
  key: 'root',
  storage,
}

export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.contacts;