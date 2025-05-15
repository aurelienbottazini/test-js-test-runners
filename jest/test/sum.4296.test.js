const sum = require('../sum');

test('adds 69 + 52 to equal 121', () => {
  expect(sum(69, 52)).toBe(121);
});