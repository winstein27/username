const UsernamesList = (props) => {
    return (
        <div>
            {props.usernames.map((username) => {
                return (
                    <p>
                        {username.name} ({username.age} years old)
                    </p>
                );
            })}
        </div>
    );
};

export default UsernamesList;
