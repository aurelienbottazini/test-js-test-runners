const sum = require('../sum');

test('adds 88 + 22 to equal 110', () => {
  expect(sum(88, 22)).toBe(110);
});