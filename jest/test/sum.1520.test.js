const sum = require('../sum');

test('adds 38 + 83 to equal 121', () => {
  expect(sum(38, 83)).toBe(121);
});