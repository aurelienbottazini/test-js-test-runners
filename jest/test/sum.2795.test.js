const sum = require('../sum');

test('adds 62 + 0 to equal 62', () => {
  expect(sum(62, 0)).toBe(62);
});