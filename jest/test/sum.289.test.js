const sum = require('../sum');

test('adds 83 + 4 to equal 87', () => {
  expect(sum(83, 4)).toBe(87);
});