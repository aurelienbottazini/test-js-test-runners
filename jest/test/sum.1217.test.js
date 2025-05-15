const sum = require('../sum');

test('adds 66 + 83 to equal 149', () => {
  expect(sum(66, 83)).toBe(149);
});