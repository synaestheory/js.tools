export default (f1, ...fs) => (...xs) => fs.reduce((x, f) => f(x), f1(...xs));
