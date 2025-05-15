const sum = require('../sum');

test('adds 81 + 40 to equal 121', () => {
  expect(sum(81, 40)).toBe(121);
});