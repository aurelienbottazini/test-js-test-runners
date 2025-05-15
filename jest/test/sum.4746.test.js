const sum = require('../sum');

test('adds 95 + 33 to equal 128', () => {
  expect(sum(95, 33)).toBe(128);
});