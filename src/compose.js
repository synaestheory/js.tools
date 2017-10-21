export default f => g => (...xs) => f(g(...xs));
