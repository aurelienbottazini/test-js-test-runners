const sum = require('../sum');

test('adds 21 + 41 to equal 62', () => {
  expect(sum(21, 41)).toBe(62);
});