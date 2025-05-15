const sum = require('../sum');

test('adds 29 + 35 to equal 64', () => {
  expect(sum(29, 35)).toBe(64);
});