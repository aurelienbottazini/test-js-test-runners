const sum = require('../sum');

test('adds 55 + 23 to equal 78', () => {
  expect(sum(55, 23)).toBe(78);
});