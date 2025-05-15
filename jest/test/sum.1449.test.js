const sum = require('../sum');

test('adds 67 + 23 to equal 90', () => {
  expect(sum(67, 23)).toBe(90);
});