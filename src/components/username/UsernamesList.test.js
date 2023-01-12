import { render, screen } from '@testing-library/react';
import UsernamesList from './UsernamesList';

describe('UsernamesList component', () => {
    test('renders usernames list properly', () => {
        const props = {
            usernames: [
                { id: 1, name: 'Winstein', age: 29 },
                { id: 2, name: 'Camila', age: 28 },
            ],
        };

        render(<UsernamesList {...props} />);

        expect(screen.getByText('Winstein (29 years old)')).toBeInTheDocument();
        expect(screen.getByText('Camila (28 years old)')).toBeInTheDocument();
    });

    test('renders empty usernames list properly', () => {
        const props = {
            usernames: [],
        };

        render(<UsernamesList {...props} />);

        expect(screen.queryAllByRole('paragraph')).toBeNull;
    });
});
