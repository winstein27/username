import { useState } from 'react';

import UsernameForm from './components/form/UsernameForm';
import Usernames from './components/username/Usernames';

const INITIAL_USERNAMES = [
    { name: 'Max', age: 20 },
    { name: 'Bob', age: 30 },
];

function App() {
    const [usernames, setUsernames] = useState(INITIAL_USERNAMES);

    const addUsername = (username) => {
        setUsernames((prevUsernames) => [...prevUsernames, username]);
    };

    return (
        <>
            <UsernameForm addUsername={addUsername} />
            <Usernames usernames={usernames} />
        </>
    );
}

export default App;
