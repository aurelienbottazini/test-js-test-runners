const sum = require('../sum');

test('adds 26 + 0 to equal 26', () => {
  expect(sum(26, 0)).toBe(26);
});