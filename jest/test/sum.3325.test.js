const sum = require('../sum');

test('adds 44 + 28 to equal 72', () => {
  expect(sum(44, 28)).toBe(72);
});