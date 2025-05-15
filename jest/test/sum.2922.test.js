const sum = require('../sum');

test('adds 19 + 11 to equal 30', () => {
  expect(sum(19, 11)).toBe(30);
});