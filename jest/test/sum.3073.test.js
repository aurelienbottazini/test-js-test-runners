const sum = require('../sum');

test('adds 33 + 66 to equal 99', () => {
  expect(sum(33, 66)).toBe(99);
});