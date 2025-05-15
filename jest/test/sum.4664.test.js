const sum = require('../sum');

test('adds 81 + 41 to equal 122', () => {
  expect(sum(81, 41)).toBe(122);
});