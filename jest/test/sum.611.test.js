const sum = require('../sum');

test('adds 56 + 21 to equal 77', () => {
  expect(sum(56, 21)).toBe(77);
});