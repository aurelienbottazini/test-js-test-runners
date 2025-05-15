const sum = require('../sum');

test('adds 85 + 45 to equal 130', () => {
  expect(sum(85, 45)).toBe(130);
});