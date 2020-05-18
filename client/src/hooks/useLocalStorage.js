import {useState} from 'react';


export const useLocalStorage = (intitialValue, key) => {
    const [value, setvalue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        return intitialValue;
    });

    const setLocalStorageValue = value => {
        const newValue = {...value};

        window.localStorage.setItem(key, JSON.stringify(newValue));
        setvalue(value);
    };

    return [value, setLocalStorageValue];
};