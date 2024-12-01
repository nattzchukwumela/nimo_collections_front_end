import { useState } from 'react';
import './signup.css';
import { apiCreateUser } from '../../utility/api/api';


export function Signup() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here, e.g., send a request to a backend server
        console.log('Signing up with:', username, email, password);
        const formData = {
            name: username,
            email: email,
            password: password
        }
        // Send data to the backend
        const createUser = async () => {
            try {
                const response = await fetch(apiCreateUser, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const data = await response.json();
                if (response.ok) {
                    alert('User created successfully!');
                    setUserData(data);
                    console.log(userData)
                } else {
                    alert('Error: ' + JSON.stringify(data));
                    console.log(error)
                }
            } catch (error) {
                console.error('Error:', error);
                setError(error.toString());
            }
        };
        createUser()
    };

    return (
        <section className='signup-parent-container'>
            <div className="signup-container">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </section>
    );
}

