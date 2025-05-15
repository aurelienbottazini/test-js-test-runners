const sum = require('../sum');

test('adds 89 + 60 to equal 149', () => {
  expect(sum(89, 60)).toBe(149);
});