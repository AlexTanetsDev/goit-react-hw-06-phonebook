import { Formik, Field, ErrorMessage } from "formik"
import { ContactsForm, FormLabel } from "./ContactForm.styled";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { addContact } from "Redux/contactsSlice";

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required().positive().integer(),
});

const initialValues = {
    name: "",
    number: ""
};


// const patern = ^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$

// \+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}


export const ContactForm = () => {

    const dispatch = useDispatch();


    const hendleSubmit = (values, { resetForm }) => {
        dispatch(addContact(values))
        resetForm();
    }
    return (
      
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={hendleSubmit}>
            <ContactsForm autoComplete="off">
                <FormLabel htmlFor="name">Name
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </FormLabel>
                
                <FormLabel htmlFor="number">Number
                    <Field type="tel" name="number"/>
                    <ErrorMessage name="number" component="div" />
                </FormLabel>
                <button type="submit">Add contact</button>
            </ContactsForm>
        </Formik>
    )

};


