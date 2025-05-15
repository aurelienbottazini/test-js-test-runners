const sum = require('../sum');

test('adds 66 + 72 to equal 138', () => {
  expect(sum(66, 72)).toBe(138);
});