const sum = require('../sum');

test('adds 51 + 26 to equal 77', () => {
  expect(sum(51, 26)).toBe(77);
});