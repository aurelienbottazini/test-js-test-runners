const sum = require('../sum');

test('adds 43 + 71 to equal 114', () => {
  expect(sum(43, 71)).toBe(114);
});