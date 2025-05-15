const sum = require('../sum');

test('adds 78 + 76 to equal 154', () => {
  expect(sum(78, 76)).toBe(154);
});