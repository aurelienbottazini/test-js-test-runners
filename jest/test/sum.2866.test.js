const sum = require('../sum');

test('adds 17 + 70 to equal 87', () => {
  expect(sum(17, 70)).toBe(87);
});