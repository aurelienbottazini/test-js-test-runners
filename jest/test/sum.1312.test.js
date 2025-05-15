const sum = require('../sum');

test('adds 84 + 21 to equal 105', () => {
  expect(sum(84, 21)).toBe(105);
});