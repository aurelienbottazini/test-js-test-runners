const sum = require('../sum');

test('adds 66 + 12 to equal 78', () => {
  expect(sum(66, 12)).toBe(78);
});