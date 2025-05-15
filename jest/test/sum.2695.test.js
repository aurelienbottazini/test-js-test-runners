const sum = require('../sum');

test('adds 60 + 90 to equal 150', () => {
  expect(sum(60, 90)).toBe(150);
});