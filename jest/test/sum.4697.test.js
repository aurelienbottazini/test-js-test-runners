const sum = require('../sum');

test('adds 76 + 78 to equal 154', () => {
  expect(sum(76, 78)).toBe(154);
});