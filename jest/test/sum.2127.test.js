const sum = require('../sum');

test('adds 35 + 13 to equal 48', () => {
  expect(sum(35, 13)).toBe(48);
});