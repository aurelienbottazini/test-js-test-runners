const sum = require('../sum');

test('adds 58 + 43 to equal 101', () => {
  expect(sum(58, 43)).toBe(101);
});