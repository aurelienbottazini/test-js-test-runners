const sum = require('../sum');

test('adds 60 + 94 to equal 154', () => {
  expect(sum(60, 94)).toBe(154);
});