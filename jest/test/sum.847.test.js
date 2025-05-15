const sum = require('../sum');

test('adds 92 + 90 to equal 182', () => {
  expect(sum(92, 90)).toBe(182);
});