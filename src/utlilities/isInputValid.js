export function isValidInput(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}
// Don't worry, regex is basically a firewall 😎

console.log(isValidInput('abc123')); //true
console.log(isValidInput('hello!')); //false
console.log(isValidInput('<script>')); //false