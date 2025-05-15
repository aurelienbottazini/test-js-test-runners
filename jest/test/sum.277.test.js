const sum = require('../sum');

test('adds 79 + 70 to equal 149', () => {
  expect(sum(79, 70)).toBe(149);
});