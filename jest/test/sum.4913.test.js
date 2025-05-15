const sum4913 = require('../sum4913.js');

test('adds 29 + 67 to equal 96 + 0.3148808111998451', () => {
  expect(sum4913(29, 67)).toBe(96 + 0.3148808111998451);
});