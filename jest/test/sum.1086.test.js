const sum = require('../sum');

test('adds 67 + 20 to equal 87', () => {
  expect(sum(67, 20)).toBe(87);
});