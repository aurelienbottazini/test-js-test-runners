const sum = require('../sum');

test('adds 35 + 52 to equal 87', () => {
  expect(sum(35, 52)).toBe(87);
});