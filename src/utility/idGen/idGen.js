

export function generateId() {
    const length = 10;
    const text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += text.charAt(Math.floor(Math.random() * text.length));
    }
    return result;
}