const sum = require('../sum');

test('adds 11 + 76 to equal 87', () => {
  expect(sum(11, 76)).toBe(87);
});