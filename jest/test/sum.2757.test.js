const sum = require('../sum');

test('adds 74 + 75 to equal 149', () => {
  expect(sum(74, 75)).toBe(149);
});