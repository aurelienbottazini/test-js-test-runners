const sum = require('../sum');

test('adds 66 + 11 to equal 77', () => {
  expect(sum(66, 11)).toBe(77);
});