const sum = require('../sum');

test('adds 91 + 10 to equal 101', () => {
  expect(sum(91, 10)).toBe(101);
});