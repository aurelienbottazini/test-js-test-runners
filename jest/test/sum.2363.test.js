const sum = require('../sum');

test('adds 10 + 72 to equal 82', () => {
  expect(sum(10, 72)).toBe(82);
});