import styles from './InvalidModal.module.css';

const InvalidModal = (props) => {
    return (
        <>
            <div
                className={styles.background}
                onClick={props.closeModal}
                hidden={props.hidden}
            ></div>
            <div className={styles.modal} hidden={props.hidden}>
                <div className={styles['modal-content']}>
                    <div className={styles['content-title']}>Invalid input</div>
                    <div className={styles['content-message']}>
                        {props.message}
                    </div>
                    <div className={styles['modal-controls']}>
                        <button onClick={props.closeModal}>Okay</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvalidModal;
