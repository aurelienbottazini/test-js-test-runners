const sum = require('../sum');

test('adds 19 + 40 to equal 59', () => {
  expect(sum(19, 40)).toBe(59);
});