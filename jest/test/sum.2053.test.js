const sum = require('../sum');

test('adds 20 + 44 to equal 64', () => {
  expect(sum(20, 44)).toBe(64);
});