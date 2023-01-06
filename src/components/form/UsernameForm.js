import { useState } from 'react';

const UsernameForm = (props) => {
    const [inputedName, setInputedName] = useState('');
    const [inputedAge, setInputedAge] = useState(0);

    const onSubmitFormHandler = (event) => {
        event.preventDefault();

        const username = { name: inputedName, age: inputedAge };
        props.addUsername(username);
    };

    const nameInputHandler = (event) => {
        setInputedName(event.target.value);
    };

    const ageInputHandler = (event) => {
        setInputedAge(event.target.value);
    };

    return (
        <form onSubmit={onSubmitFormHandler}>
            <label>Username</label>
            <input
                id="name"
                type="text"
                value={inputedName}
                onChange={nameInputHandler}
            />
            <label>Age (Years)</label>
            <input
                id="age"
                type="number"
                value={inputedAge}
                onChange={ageInputHandler}
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UsernameForm;
