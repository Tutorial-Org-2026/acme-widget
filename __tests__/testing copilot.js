reverseString = (str) => {
    return str.split('').reverse().join('');
}

// Write a test for the reverseString function
const reverseString = require('../reverseString');
test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});





