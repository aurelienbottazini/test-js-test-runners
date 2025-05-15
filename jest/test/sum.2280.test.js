const sum = require('../sum');

test('adds 62 + 98 to equal 160', () => {
  expect(sum(62, 98)).toBe(160);
});