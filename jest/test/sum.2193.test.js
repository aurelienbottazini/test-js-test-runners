const sum = require('../sum');

test('adds 13 + 72 to equal 85', () => {
  expect(sum(13, 72)).toBe(85);
});