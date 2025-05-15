const sum265 = require('../sum265.js');

test('adds 19 + 23 to equal 42 + 0.9463392489288542', () => {
  expect(sum265(19, 23)).toBe(42 + 0.9463392489288542);
});