const sum = require('../sum');

test('adds 1 + 61 to equal 62', () => {
  expect(sum(1, 61)).toBe(62);
});