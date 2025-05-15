const sum = require('../sum');

test('adds 73 + 61 to equal 134', () => {
  expect(sum(73, 61)).toBe(134);
});