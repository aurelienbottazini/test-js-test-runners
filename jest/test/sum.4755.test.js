const sum = require('../sum');

test('adds 50 + 14 to equal 64', () => {
  expect(sum(50, 14)).toBe(64);
});