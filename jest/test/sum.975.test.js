const sum = require('../sum');

test('adds 2 + 88 to equal 90', () => {
  expect(sum(2, 88)).toBe(90);
});