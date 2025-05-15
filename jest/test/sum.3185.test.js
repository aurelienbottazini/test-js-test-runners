const sum = require('../sum');

test('adds 83 + 88 to equal 171', () => {
  expect(sum(83, 88)).toBe(171);
});