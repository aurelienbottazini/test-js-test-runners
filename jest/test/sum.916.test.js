const sum = require('../sum');

test('adds 40 + 38 to equal 78', () => {
  expect(sum(40, 38)).toBe(78);
});