import { useState } from 'react';

const users = [
    { name: 'Search', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })

        setUser(foundUser);
    };
    // user && user.name only print if user is truthy shorthand
    return (
        <div>
            User Search
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={onClick}> Find User</button>
            <div>{user && user.name}</div>
        </div>
    )
}

export default UserSearch;