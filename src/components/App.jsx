import { GlobalStyles } from "./GlobalStyles";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Wrapper } from "./wrapper.styled";
import { useSelector } from "react-redux";
import { selectContacts } from "Redux/contactsSlice";




export const App = () => {

  const contacts = useSelector(selectContacts);

 
    return (
         <>
           <GlobalStyles />
           <Wrapper>
             <h1>Phonebook</h1>
          <ContactForm />

          <h2>{contacts.length === 0 ? 'Here will be your contacts. Add contacts': 'Contacts' }</h2>
          {contacts.length > 1 && <Filter /> } 
          {contacts.length !== 0 && <ContactList /> }
           </Wrapper>
         </>
    )
 
};
