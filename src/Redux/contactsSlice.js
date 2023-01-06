import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContcatsState = [];

const contactsSlice = createSlice({

    name: "Contacts",
    initialState: initialContcatsState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
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
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    }
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;