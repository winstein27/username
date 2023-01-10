import { useState, useRef } from 'react';

import styles from './UsernameForm.module.css';

import Card from '../UI/Card';
import InvalidModal from '../modal/InvalidModal';

const UsernameForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [openModal, setOpenModal] = useState({ open: false, message: '' });

    const onSubmitFormHandler = (event) => {
        event.preventDefault();

        const inputedName = nameInputRef.current.value;
        const inputedAge = ageInputRef.current.value;

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

            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
        }
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
                    <input id="name" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <button type="submit">Add User</button>
                </form>
            </Card>
        </>
    );
};

export default UsernameForm;
