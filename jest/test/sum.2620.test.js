const sum = require('../sum');

test('adds 44 + 43 to equal 87', () => {
  expect(sum(44, 43)).toBe(87);
});