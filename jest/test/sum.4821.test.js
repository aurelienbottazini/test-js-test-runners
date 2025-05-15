const sum = require('../sum');

test('adds 29 + 71 to equal 100', () => {
  expect(sum(29, 71)).toBe(100);
});