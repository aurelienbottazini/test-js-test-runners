const sum = require('../sum');

test('adds 79 + 35 to equal 114', () => {
  expect(sum(79, 35)).toBe(114);
});