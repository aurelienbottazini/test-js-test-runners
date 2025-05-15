const sum = require('../sum');

test('adds 22 + 88 to equal 110', () => {
  expect(sum(22, 88)).toBe(110);
});