const sum = require('../sum');

test('adds 17 + 9 to equal 26', () => {
  expect(sum(17, 9)).toBe(26);
});