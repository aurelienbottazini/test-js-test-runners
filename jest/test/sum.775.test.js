const sum = require('../sum');

test('adds 84 + 70 to equal 154', () => {
  expect(sum(84, 70)).toBe(154);
});