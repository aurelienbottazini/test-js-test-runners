const sum = require('../sum');

test('adds 49 + 28 to equal 77', () => {
  expect(sum(49, 28)).toBe(77);
});