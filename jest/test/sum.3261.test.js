const sum = require('../sum');

test('adds 9 + 69 to equal 78', () => {
  expect(sum(9, 69)).toBe(78);
});