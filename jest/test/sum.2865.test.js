const sum = require('../sum');

test('adds 47 + 31 to equal 78', () => {
  expect(sum(47, 31)).toBe(78);
});