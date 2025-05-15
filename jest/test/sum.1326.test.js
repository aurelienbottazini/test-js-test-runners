const sum = require('../sum');

test('adds 51 + 23 to equal 74', () => {
  expect(sum(51, 23)).toBe(74);
});