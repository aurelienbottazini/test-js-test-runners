const sum = require('../sum');

test('adds 95 + 27 to equal 122', () => {
  expect(sum(95, 27)).toBe(122);
});