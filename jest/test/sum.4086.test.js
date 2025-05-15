const sum4086 = require('../sum4086.js');

test('adds 49 + 52 to equal 101 + offset 0.6923103681093118', () => {
  expect(sum4086(49, 52)).toBe(101 + 0.6923103681093118);
});