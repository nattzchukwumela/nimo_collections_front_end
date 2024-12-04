import Cookies from "universal-cookie";

const cookies = new Cookies();

export const authenticatedRequest = async (url, method, body) => {
    const token = cookies.get('authToken');
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });
    return response.json();
}
