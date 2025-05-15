const sum = require('../sum');

test('adds 0 + 59 to equal 59', () => {
  expect(sum(0, 59)).toBe(59);
});