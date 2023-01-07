import UsernamesList from './UsernamesList';
import Card from '../UI/Card';

const Usernames = (props) => {
    return (
        <Card>
            <UsernamesList {...props} />
        </Card>
    );
};

export default Usernames;
