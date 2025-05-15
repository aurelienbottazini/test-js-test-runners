const sum = require('../sum');

test('adds 26 + 95 to equal 121', () => {
  expect(sum(26, 95)).toBe(121);
});