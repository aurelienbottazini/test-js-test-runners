const sum = require('../sum');

test('adds 75 + 96 to equal 171', () => {
  expect(sum(75, 96)).toBe(171);
});