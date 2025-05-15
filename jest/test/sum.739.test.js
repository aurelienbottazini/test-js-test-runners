const sum = require('../sum');

test('adds 90 + 31 to equal 121', () => {
  expect(sum(90, 31)).toBe(121);
});