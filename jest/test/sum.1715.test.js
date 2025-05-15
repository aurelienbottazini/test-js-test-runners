const sum = require('../sum');

test('adds 60 + 68 to equal 128', () => {
  expect(sum(60, 68)).toBe(128);
});