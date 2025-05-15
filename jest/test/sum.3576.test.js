const sum = require('../sum');

test('adds 17 + 31 to equal 48', () => {
  expect(sum(17, 31)).toBe(48);
});