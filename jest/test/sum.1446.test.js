const sum = require('../sum');

test('adds 31 + 33 to equal 64', () => {
  expect(sum(31, 33)).toBe(64);
});