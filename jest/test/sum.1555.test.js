const sum = require('../sum');

test('adds 52 + 39 to equal 91', () => {
  expect(sum(52, 39)).toBe(91);
});