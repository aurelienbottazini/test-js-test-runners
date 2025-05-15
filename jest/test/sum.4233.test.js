const sum = require('../sum');

test('adds 76 + 73 to equal 149', () => {
  expect(sum(76, 73)).toBe(149);
});