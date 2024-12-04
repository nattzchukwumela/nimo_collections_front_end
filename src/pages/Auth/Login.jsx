import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLoginUser } from '../../utility/api/api';
import { AuthContext } from '../../Context/AuthContext';
import Cookies from 'universal-cookie';
import './login.css';

export function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const loginUser = async (e) => {
        e.preventDefault();
        setError('');

        // Validate inputs
        if (!email.trim()) {
            setError('Email is required');
            return;
        }
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if (!password) {
            setError('Password is required');
            return;
        }

        setIsLoading(true);
        const loginCredentials = {
            'email': email.trim(),
            'password': password
        }

        try {
            const response = await fetch(apiLoginUser, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(loginCredentials),
                credentials: 'include'
            })

            const data = await response.json();

            if (response.ok) {
                cookies.set('accessToken', data.access, {
                    path: '/',
                    maxAge: 86400,
                    secure: true,
                    sameSite: 'strict'
                });

                cookies.set('refreshToken', data.refresh, {
                    path: '/',
                    maxAge: 7 * 86400,
                    secure: true,
                    sameSite: 'strict'
                });

                login(data.access);
                navigate('/');
            } else {
                setError(data.detail || 'Login failed. Please try again.');
            }
        } catch (error) {
            setError('Network error. Please check your connection.');
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className='login-parent-container'>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={loginUser}>
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
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p>Don&apos;t have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </section>
    );
}