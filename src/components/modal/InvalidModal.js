import styles from './InvalidModal.module.css';

const InvalidModal = (props) => {
    return (
        <div className={styles.modal} hidden={true}>
            <div className={styles['modal-content']}>
                <div className={styles['content-title']}>Title</div>
                <div className={styles['content-message']}>Invalid input</div>
                <div className={styles['modal-controls']}>
                    <button>Okay</button>
                </div>
            </div>
        </div>
    );
};

export default InvalidModal;
