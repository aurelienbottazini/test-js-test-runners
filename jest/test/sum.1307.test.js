const sum1307 = require('../sum1307.js');

test('adds 95 + 67 to equal 162 + 0.9895127583150897', () => {
  expect(sum1307(95, 67)).toBe(162 + 0.9895127583150897);
});