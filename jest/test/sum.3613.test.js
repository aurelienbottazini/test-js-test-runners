const sum = require('../sum');

test('adds 21 + 43 to equal 64', () => {
  expect(sum(21, 43)).toBe(64);
});