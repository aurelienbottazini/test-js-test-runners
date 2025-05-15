const sum = require('../sum');

test('adds 3 + 61 to equal 64', () => {
  expect(sum(3, 61)).toBe(64);
});