import ReactDom from 'react-dom';

import styles from './InvalidModal.module.css';

const Backdrop = (props) => {
    return (
        <div
            className={styles.background}
            onClick={props.closeModal}
            hidden={props.hidden}
        ></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal} hidden={props.hidden}>
            <div className={styles['modal-content']}>
                <div className={styles['content-title']}>Invalid input</div>
                <div className={styles['content-message']}>{props.message}</div>
                <div className={styles['modal-controls']}>
                    <button onClick={props.closeModal}>Okay</button>
                </div>
            </div>
        </div>
    );
};

const InvalidModal = (props) => {
    return (
        <>
            {ReactDom.createPortal(
                <Backdrop
                    closeModal={props.closeModal}
                    hidden={props.hidden}
                />,
                document.getElementById('overlay-root')
            )}
            {ReactDom.createPortal(
                <ModalOverlay
                    hidden={props.hidden}
                    message={props.message}
                    closeModal={props.closeModal}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    );
};

export default InvalidModal;
