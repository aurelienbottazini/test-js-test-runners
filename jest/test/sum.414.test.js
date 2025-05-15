const sum = require('../sum');

test('adds 19 + 91 to equal 110', () => {
  expect(sum(19, 91)).toBe(110);
});