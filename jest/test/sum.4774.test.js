const sum = require('../sum');

test('adds 81 + 90 to equal 171', () => {
  expect(sum(81, 90)).toBe(171);
});