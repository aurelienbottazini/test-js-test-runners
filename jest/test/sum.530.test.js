const sum = require('../sum');

test('adds 48 + 90 to equal 138', () => {
  expect(sum(48, 90)).toBe(138);
});