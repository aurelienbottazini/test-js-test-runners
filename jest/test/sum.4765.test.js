const sum = require('../sum');

test('adds 64 + 61 to equal 125', () => {
  expect(sum(64, 61)).toBe(125);
});