const sum = require('../sum');

test('adds 67 + 87 to equal 154', () => {
  expect(sum(67, 87)).toBe(154);
});