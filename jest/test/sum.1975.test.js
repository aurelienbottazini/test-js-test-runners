const sum = require('../sum');

test('adds 27 + 23 to equal 50', () => {
  expect(sum(27, 23)).toBe(50);
});