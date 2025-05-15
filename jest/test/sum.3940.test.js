const sum = require('../sum');

test('adds 41 + 64 to equal 105', () => {
  expect(sum(41, 64)).toBe(105);
});