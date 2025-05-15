const sum = require('../sum');

test('adds 37 + 27 to equal 64', () => {
  expect(sum(37, 27)).toBe(64);
});