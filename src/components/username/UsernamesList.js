import styles from './UsernamesList.module.css';

const UsernamesList = (props) => {
    return (
        <div className={styles.username}>
            {props.usernames.map((username) => {
                return (
                    <p key={username.id}>
                        {username.name} ({username.age} years old)
                    </p>
                );
            })}
        </div>
    );
};

export default UsernamesList;
