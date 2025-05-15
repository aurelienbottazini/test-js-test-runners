const sum = require('../sum');

test('adds 66 + 28 to equal 94', () => {
  expect(sum(66, 28)).toBe(94);
});