import { useState } from 'react';

import styles from './UsernameForm.module.css';

import Card from '../UI/Card';
import InvalidModal from '../modal/InvalidModal';

const UsernameForm = (props) => {
    const [inputedName, setInputedName] = useState('');
    const [inputedAge, setInputedAge] = useState(0);

    const onSubmitFormHandler = (event) => {
        event.preventDefault();

        const username = { name: inputedName, age: inputedAge };
        props.addUsername(username);
        setInputedName('');
        setInputedAge('');
    };

    const nameInputHandler = (event) => {
        setInputedName(event.target.value);
    };

    const ageInputHandler = (event) => {
        setInputedAge(event.target.value);
    };

    return (
        <>
            <InvalidModal />
            <Card>
                <form className={styles.form} onSubmit={onSubmitFormHandler}>
                    <label for="name">Username</label>
                    <input
                        id="name"
                        type="text"
                        value={inputedName}
                        onChange={nameInputHandler}
                    />
                    <label for="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={inputedAge}
                        onChange={ageInputHandler}
                    />
                    <button type="submit">Add User</button>
                </form>
            </Card>
        </>
    );
};

export default UsernameForm;
