const sum = require('../sum');

test('adds 73 + 55 to equal 128', () => {
  expect(sum(73, 55)).toBe(128);
});