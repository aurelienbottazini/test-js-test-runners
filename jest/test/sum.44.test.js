const sum = require('../sum');

test('adds 99 + 76 to equal 175', () => {
  expect(sum(99, 76)).toBe(175);
});