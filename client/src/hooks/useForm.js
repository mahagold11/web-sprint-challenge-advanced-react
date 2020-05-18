// write your custom hook here to control your checkout form
import {useState} from 'react';
import {useLocalStorage} from './useLocalStorage.js';


export const useForm = (initialState, key) => {
    const [values, setvalues] = useLocalStorage (
        initialState,
        key
    );
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const handleChanges = e => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const clearForm = () => {
        setvalues(initialState);
    };

    const handleSubmit = e => {
        e.preventDefault();
        clearForm();
        setShowSuccessMessage(true);
    };

    return [values, handleChanges, handleSubmit, showSuccessMessage];
};