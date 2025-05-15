const sum = require('../sum');

test('adds 66 + 88 to equal 154', () => {
  expect(sum(66, 88)).toBe(154);
});