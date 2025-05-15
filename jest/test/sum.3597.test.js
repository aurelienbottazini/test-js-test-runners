const sum = require('../sum');

test('adds 20 + 6 to equal 26', () => {
  expect(sum(20, 6)).toBe(26);
});