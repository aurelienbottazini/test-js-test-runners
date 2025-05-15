const sum = require('../sum');

test('adds 89 + 21 to equal 110', () => {
  expect(sum(89, 21)).toBe(110);
});