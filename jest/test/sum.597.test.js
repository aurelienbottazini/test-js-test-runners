const sum = require('../sum');

test('adds 71 + 83 to equal 154', () => {
  expect(sum(71, 83)).toBe(154);
});