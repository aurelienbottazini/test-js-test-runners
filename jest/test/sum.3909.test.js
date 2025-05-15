const sum = require('../sum');

test('adds 73 + 18 to equal 91', () => {
  expect(sum(73, 18)).toBe(91);
});