const sum = require('../sum');

test('adds 60 + 78 to equal 138', () => {
  expect(sum(60, 78)).toBe(138);
});