const sum = require('../sum');

test('adds 67 + 45 to equal 112', () => {
  expect(sum(67, 45)).toBe(112);
});