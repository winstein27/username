import { useState } from 'react';

import styles from './UsernameForm.module.css';

import Card from '../UI/Card';
import InvalidModal from '../modal/InvalidModal';

const UsernameForm = (props) => {
    const [inputedName, setInputedName] = useState('');
    const [inputedAge, setInputedAge] = useState('');
    const [openModal, setOpenModal] = useState({ open: false, message: '' });

    const onSubmitFormHandler = (event) => {
        event.preventDefault();

        if (!inputedName.trim().length && inputedAge < 1) {
            setOpenModal({
                open: true,
                message:
                    'Please, enter a valid name and age (non-empty name and age > 0).',
            });
        } else if (!inputedName.trim().length) {
            setOpenModal({
                open: true,
                message: 'Please, enter a valid name (non-empty value).',
            });
        } else if (inputedAge < 1) {
            setOpenModal({
                open: true,
                message: 'Please, enter a valid age ( >0 ).',
            });
        } else {
            const username = {
                id: Math.random().toString(),
                name: inputedName,
                age: inputedAge,
            };
            props.addUsername(username);

            setInputedName('');
            setInputedAge('');
        }
    };

    const nameInputHandler = (event) => {
        setInputedName(event.target.value);
    };

    const ageInputHandler = (event) => {
        setInputedAge(event.target.value);
    };

    const closeModal = () => {
        setOpenModal({ open: false, message: '' });
    };

    return (
        <>
            <InvalidModal
                hidden={!openModal.open}
                message={openModal.message}
                closeModal={closeModal}
            />
            <Card>
                <form className={styles.form} onSubmit={onSubmitFormHandler}>
                    <label htmlFor="name">Username</label>
                    <input
                        id="name"
                        type="text"
                        value={inputedName}
                        onChange={nameInputHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
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
