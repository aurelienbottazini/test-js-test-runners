const sum = require('../sum');

test('adds 15 + 72 to equal 87', () => {
  expect(sum(15, 72)).toBe(87);
});