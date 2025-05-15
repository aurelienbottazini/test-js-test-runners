const sum = require('../sum');

test('adds 3 + 21 to equal 24', () => {
  expect(sum(3, 21)).toBe(24);
});