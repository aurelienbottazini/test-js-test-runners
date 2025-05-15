const sum = require('../sum');

test('adds 3 + 88 to equal 91', () => {
  expect(sum(3, 88)).toBe(91);
});